"use client"; // This directive tells Next.js that this component should be treated as a Client Component


// import React from 'react';
// import './RedditRCSharpCommentsSection.css'; // Ensure the CSS file is imported
// import { Comment, RedditRCSharpCommentsSectionProps } from './types'; 

// const RedditRCSharpCommentsSection = ({ comments : RedditRCSharpCommentsSectionProps }) => {
//     return (
//         <div className="reddit-comments-section">
//             {comments.map((comment, index) => (
//                 <div key={index} className="reddit_rsharp_singleton_scoped_transient_comment" id={comment.id} aria-label={`Comment thread level ${comment.depth}: Reply from ${comment.author} ${comment.timestamp}`}>
//                     {/* <!-- Avatar and User Info --> */}
//                     <div className="reddit_rsharp_singleton_scoped_transient_comment_avatar">
//                         <a href={comment.userProfile} aria-label={`${comment.author}'s profile`} aria-haspopup="dialog" aria-expanded="false">
//                             <div className="reddit_rsharp_singleton_scoped_transient_avatar_container">
//                                 <img src={comment.avatarUrl} alt="User Avatar" className="reddit_rsharp_singleton_scoped_transient_avatar" />
//                             </div>
//                         </a>
//                     </div>
//                     {/* <!-- Comment Meta Information --> */}
//                     <div className="reddit_rsharp_singleton_scoped_transient_comment_meta">
//                         <a href={comment.userProfile} className="reddit_rsharp_singleton_scoped_transient_author" aria-label={`${comment.author}'s profile`}>{comment.author}</a>
//                         <span className="reddit_rsharp_singleton_scoped_transient_separator">•</span>
//                         <a href={comment.permalink} className="reddit_rsharp_singleton_scoped_transient_timestamp" rel="nofollow noopener noreferrer">
//                             <p>{comment.timestamp}</p>
//                         </a>
//                     </div>
//                     {/* <!-- Comment Content --> */}
//                     <div className="reddit_rsharp_singleton_scoped_transient_comment_content">
//                         <p>{comment.content}</p>
//                     </div>
//                     {/* <!-- Comment Action Row --> */}
//                     <div className="reddit_rsharp_singleton_scoped_transient_vote_buttons">
//                         <button className="reddit_rsharp_singleton_scoped_transient_vote_button upvote" aria-label="Upvote this comment">
//                             <span className="arrow-up">▲</span>
//                         </button>
//                         <span className="reddit_rsharp_singleton_scoped_transient_vote_count" aria-label={`Comment score: ${comment.score}`}>{comment.score}</span>
//                         <button className="reddit_rsharp_singleton_scoped_transient_vote_button downvote" aria-label="Downvote this comment">
//                             <span className="arrow-down">▼</span>
//                         </button>
//                     </div>
//                     <div className="reddit_rsharp_singleton_scoped_transient_comment_action_row">
//                         <button className="reddit_rsharp_singleton_scoped_transient_reply_button" aria-label={`Reply to ${comment.author}'s comment`}>Reply</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_award_button" aria-label={`Award ${comment.author}'s comment`}>Award</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_share_button" aria-label={`Share ${comment.author}'s comment`}>Share</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default RedditRCSharpCommentsSection;
"use client"; // This directive tells Next.js that this component should be treated as a Client Component

import React from 'react';
// import './RedditRCSharpCommentsSection.css'; // Ensure the CSS file is imported
// import { Comment, RedditRCSharpCommentsSectionProps } from './types.ts'; 
export interface Comment {
    id: string;
    author: string;
    avatarUrl: string;
    userProfile: string;
    timestamp: string;
    content: string;
    score: number;
    permalink: string;
    depth: number;
    parentId: string;
}

export interface RedditRCSharpCommentsSectionProps {
    comments: Comment[];
}
// Correctly typing the props for the component
const RedditRCSharpCommentsSection: React.FC<RedditRCSharpCommentsSectionProps> = ({ comments }) => {
    return (
        <div className="reddit-comments-section">
            {comments.map((comment: Comment) => (
                <div 
                    key={comment.id} 
                    className="reddit_rsharp_singleton_scoped_transient_comment" 
                    id={comment.id} 
                    aria-label={`Comment thread level ${comment.depth}: Reply from ${comment.author} ${comment.timestamp}`}
                >
                    {/* <!-- Avatar and User Info --> */}
                    <div className="reddit_rsharp_singleton_scoped_transient_comment_avatar">
                        <a href={comment.userProfile} aria-label={`${comment.author}'s profile`} aria-haspopup="dialog" aria-expanded="false">
                            <div className="reddit_rsharp_singleton_scoped_transient_avatar_container">
                                <img src={comment.avatarUrl} alt="User Avatar" className="reddit_rsharp_singleton_scoped_transient_avatar" />
                            </div>
                        </a>
                    </div>
                    {/* <!-- Comment Meta Information --> */}
                    <div className="reddit_rsharp_singleton_scoped_transient_comment_meta">
                        <a href={comment.userProfile} className="reddit_rsharp_singleton_scoped_transient_author" aria-label={`${comment.author}'s profile`}>
                            {comment.author}
                        </a>
                        <span className="reddit_rsharp_singleton_scoped_transient_separator">•</span>
                        <a href={comment.permalink} className="reddit_rsharp_singleton_scoped_transient_timestamp" rel="nofollow noopener noreferrer">
                            <p>{comment.timestamp}</p>
                        </a>
                    </div>
                    {/* <!-- Comment Content --> */}
                    <div className="reddit_rsharp_singleton_scoped_transient_comment_content"  dangerouslySetInnerHTML={{ __html: comment.content }} >
                    
                    {/* Render HTML content */}
                    <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                     {/* <p>{comment.content}</p>  */}
                       
                    </div>
                    {/* <!-- Comment Action Row --> */}
                    <div className="reddit_rsharp_singleton_scoped_transient_vote_buttons">
                        <button className="reddit_rsharp_singleton_scoped_transient_vote_button upvote" aria-label="Upvote this comment">
                            <span className="arrow-up">▲</span>
                        </button>
                        <span className="reddit_rsharp_singleton_scoped_transient_vote_count" aria-label={`Comment score: ${comment.score}`}>{comment.score}</span>
                        <button className="reddit_rsharp_singleton_scoped_transient_vote_button downvote" aria-label="Downvote this comment">
                            <span className="arrow-down">▼</span>
                        </button>
                    </div>
                    <div className="reddit_rsharp_singleton_scoped_transient_comment_action_row">
                        <button className="reddit_rsharp_singleton_scoped_transient_reply_button" aria-label={`Reply to ${comment.author}'s comment`}>Reply</button>
                        <button className="reddit_rsharp_singleton_scoped_transient_award_button" aria-label={`Award ${comment.author}'s comment`}>Award</button>
                        <button className="reddit_rsharp_singleton_scoped_transient_share_button" aria-label={`Share ${comment.author}'s comment`}>Share</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RedditRCSharpCommentsSection;
