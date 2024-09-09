 "use client"; // This directive tells Next.js that this component should be treated as a Client Component

 
 import React, { useState, useRef, useEffect } from 'react';
// import './CommentSection.css'; // Make sure to include your CSS styles here

// const RedditRSharpSingletonScopedTransient = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const menuRef = useRef<HTMLDivElement>(null);
//     const buttonRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         // Close the menu if clicked outside
//         const handleClickOutside = (event : any) => {
//             if (menuRef.current && !menuRef.current.contains(event.target) &&
//                 buttonRef.current && !buttonRef.current.contains(event.target)) {
//                 setIsMenuOpen(false);
//             }
//         };

//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className="reddit_rsharp_singleton_scoped_transient_comment">
//             <div className="reddit_rsharp_singleton_scoped_transient_vote_buttons">
//                 <button className="reddit_rsharp_singleton_scoped_transient_vote_button upvote" aria-label="Upvote this comment">
//                     <span className="arrow-up">▲</span>
//                 </button>
//                 <span className="reddit_rsharp_singleton_scoped_transient_vote_count" aria-label="Comment score: 7">7</span>
//                 <button className="reddit_rsharp_singleton_scoped_transient_vote_button downvote" aria-label="Downvote this comment">
//                     <span className="arrow-down">▼</span>
//                 </button>
//             </div>
//             <div className="reddit_rsharp_singleton_scoped_transient_comment_action_row">
//                 <button className="reddit_rsharp_singleton_scoped_transient_reply_button" aria-label="Reply to zaibuf's comment">Reply</button>
//                 <button
//                     ref={buttonRef}
//                     className="reddit_rsharp_singleton_scoped_transient_more_options_button"
//                     aria-label="More options"
//                     onClick={toggleMenu}
//                 >
//                     <span className="more-dots">⋯</span>
//                 </button>
//                 {isMenuOpen && (
//                     <div ref={menuRef} className="reddit_rsharp_singleton_scoped_transient_more_options_menu">
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Report this comment">Report</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Save this comment">Save</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Award this comment">Award</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Share this comment">Share</button>
//                     </div>
//                 )}
//             </div>
//             <div className="reddit_rsharp_singleton_scoped_transient_comment_content">
//                 <p>This is a comment about Singleton, Scoped, and Transient.</p>
//             </div>
//         </div>
//     );
// };
const RedditRSharpSingletonScopedTransient = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
<div className="reddit_rsharp_singleton_scoped_transient_comment" id="t1_kjxaz5y" aria-label="Comment thread level 1: Reply from zaibuf 7 months ago">
            {/* Avatar and User Info */}
            <div className="reddit_rsharp_singleton_scoped_transient_comment_avatar">
                <a href="/user/Preparingtocode/" aria-label="Preparingtocode's profile" aria-haspopup="dialog" aria-expanded="false">
                    <div className="reddit_rsharp_singleton_scoped_transient_avatar_container">
                        <img 
                            src="https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN18zOTM0NDY_rare_dbbf7267-85d9-4fd8-b5ad-8f2e0ea5d1fc.png" 
                            alt="User Avatar" 
                            className="reddit_rsharp_singleton_scoped_transient_avatar" 
                        />
                    </div>
                </a>
            </div>

            {/* Comment Meta Information */}
            <div className="reddit_rsharp_singleton_scoped_transient_comment_meta">
                <a href="/user/Preparingtocode/" className="reddit_rsharp_singleton_scoped_transient_author" aria-label="Preparingtocode's profile">Preparingtocode</a>
                <span className="reddit_rsharp_singleton_scoped_transient_separator">•</span>
                <a href="/r/csharp/comments/1acwtar/comment/kjxaz5y/" className="reddit_rsharp_singleton_scoped_transient_timestamp" rel="nofollow noopener noreferrer">          
                   <p>7mo ago</p>
                </a>
            </div>

            {/* Comment Content */}
            <div className="reddit_rsharp_singleton_scoped_transient_comment_content">
            <p>
                    <strong>Singleton</strong>: This creates only one instance of a class during the application&#39;s lifecycle. Every time you request this class, you get the same instance. Use it for classes that are expensive to create or maintain a common state throughout the application, like a database connection.
                </p>
                <p>
                    <strong>Transient</strong>: Every time you request a transient class, a new instance is created. This is useful for lightweight, stateless services where each operation requires a clean and independent instance.
                </p>
                <p>
                    <strong>Scoped</strong>: Scoped instances are created once per client request. In a web application, for example, a new instance is created for each HTTP request but is shared across that request. Use it for services that need to maintain state within a request but not beyond it, like shopping cart in an e-commerce site.
                </p>
            </div>

            {/* Vote Buttons */}
            <div className="reddit_rsharp_singleton_scoped_transient_vote_buttons">
                <button className="reddit_rsharp_singleton_scoped_transient_vote_button upvote" aria-label="Upvote this comment">
                    <span className="arrow-up">▲</span>
                </button>
                <span className="reddit_rsharp_singleton_scoped_transient_vote_count" aria-label="Comment score: 114">114</span>
                <button className="reddit_rsharp_singleton_scoped_transient_vote_button downvote" aria-label="Downvote this comment">
                    <span className="arrow-down">▼</span>
                </button>
            </div>

            {/* Action Row */}
            <div className="reddit_rsharp_singleton_scoped_transient_comment_action_row">
                <button 
                    className="reddit_rsharp_singleton_scoped_transient_more_options_button"
                    aria-label="More options"
                    onClick={toggleMenu}
                    ref={buttonRef}
                >
                    <span className="more-dots">⋯</span>
                </button>
                {isMenuOpen && (
                    <div ref={menuRef} className="reddit_rsharp_singleton_scoped_transient_more_options_menu">
                        <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Report this comment">Report</button>
                        <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Save this comment">Save</button>
                        <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Award this comment">Award</button>
                        <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Share this comment">Share</button>
                    </div>
                )}
                <button className="reddit_rsharp_singleton_scoped_transient_reply_button" aria-label="Reply to zaibuf's comment">Reply</button>
                <button className="reddit_rsharp_singleton_scoped_transient_award_button" aria-label="Award zaibuf's comment">Award</button>
                <button className="reddit_rsharp_singleton_scoped_transient_share_button" aria-label="Share zaibuf's comment">Share</button>
            </div>


        {/* <!-- Nested Comment Level 2 --> */}
        <div className="reddit_rsharp_singleton_scoped_transient_comment nested" id="t1_kjxdwif" aria-label="Comment thread level 2: Reply from RecognitionOwn4214 7 months ago">
            {/* <!-- Avatar and User Info --> */}
            <div className="reddit_rsharp_singleton_scoped_transient_comment_avatar">
                <a href="/user/RecognitionOwn4214/" aria-label="RecognitionOwn4214's profile" aria-haspopup="dialog" aria-expanded="false">
                    <div className="reddit_rsharp_singleton_scoped_transient_avatar_container">
                        <img src="https://styles.redditmedia.com/t5_3qp9yh/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNDY2YTMzMDg4N2JkZjYyZDUzZjk2OGVhODI0NzkzMTUwZjA3NzYyZV81NDA1NTU_rare_95b0e6bd-f1a0-4eb1-8e83-14f626a21f0a-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=e8695be4aa3aa536cdbec31c0998c0fd4346c47a" alt="User Avatar" className="reddit_rsharp_singleton_scoped_transient_avatar"></img>
                    </div>
                </a>
            </div>
            {/* <!-- Comment Meta Information --> */}
            <div className="reddit_rsharp_singleton_scoped_transient_comment_meta">
                <a href="/user/RecognitionOwn4214/" className="reddit_rsharp_singleton_scoped_transient_author" aria-label="mcb2001's profile">mcb2001</a>
                <span className="reddit_rsharp_singleton_scoped_transient_separator">•</span>
                <a href="/r/csharp/comments/1acwtar/comment/kjxa49j/" className="reddit_rsharp_singleton_scoped_transient_timestamp" rel="nofollow noopener noreferrer">
                <p>7mo ago</p>
                   {/* <time datetime="2024-01-28T08:25:57.166Z">7mo ago</time> */}
                </a>
            </div>
            {/* <!-- Comment Content --> */}
            <div className="reddit_rsharp_singleton_scoped_transient_comment_content">
                <p>Ef core is a unit of work pattern in it self, and should always be scoped</p>
            </div>
            {/* <!-- Comment Action Row --> */}
            <div className="reddit_rsharp_singleton_scoped_transient_vote_buttons">
                  <button className="reddit_rsharp_singleton_scoped_transient_vote_button upvote" aria-label="Upvote this comment">
                      <span className="arrow-up">▲</span>
                  </button>
                  <span className="reddit_rsharp_singleton_scoped_transient_vote_count" aria-label="Comment score: 41">41</span>
                  <button className="reddit_rsharp_singleton_scoped_transient_vote_button downvote" aria-label="Downvote this comment">
                      <span className="arrow-down">▼</span>
                  </button>
            </div>
            <div className="reddit_rsharp_singleton_scoped_transient_comment_action_row">
                <button className="reddit_rsharp_singleton_scoped_transient_reply_button" aria-label="Reply to RecognitionOwn4214's comment">Reply</button>
                <button className="reddit_rsharp_singleton_scoped_transient_award_button" aria-label="Award RecognitionOwn4214's comment">Award</button>
                <button className="reddit_rsharp_singleton_scoped_transient_share_button" aria-label="Share RecognitionOwn4214's comment">Share</button>
            </div>
        </div>

        </div>
       
    );
}
 export default RedditRSharpSingletonScopedTransient;


// import React, { useState, useRef, useEffect } from 'react';
// import './CommentSection.css'; // Make sure to include your CSS styles here

// const RedditRSharpSingletonScopedTransient: React.FC = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//     const menuRef = useRef<HTMLDivElement>(null);
//     const buttonRef = useRef<HTMLButtonElement>(null);

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 menuRef.current && !menuRef.current.contains(event.target as Node) &&
//                 buttonRef.current && !buttonRef.current.contains(event.target as Node)
//             ) {
//                 setIsMenuOpen(false);
//             }
//         };

//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className="reddit_rsharp_singleton_scoped_transient_comment">
//             <div className="reddit_rsharp_singleton_scoped_transient_vote_buttons">
//                 <button className="reddit_rsharp_singleton_scoped_transient_vote_button upvote" aria-label="Upvote this comment">
//                     <span className="arrow-up">▲</span>
//                 </button>
//                 <span className="reddit_rsharp_singleton_scoped_transient_vote_count" aria-label="Comment score: 7">7</span>
//                 <button className="reddit_rsharp_singleton_scoped_transient_vote_button downvote" aria-label="Downvote this comment">
//                     <span className="arrow-down">▼</span>
//                 </button>
//             </div>
//             <div className="reddit_rsharp_singleton_scoped_transient_comment_action_row">
//                 <button className="reddit_rsharp_singleton_scoped_transient_reply_button" aria-label="Reply to zaibuf's comment">Reply</button>
//                 <button
//                     ref={buttonRef}
//                     className="reddit_rsharp_singleton_scoped_transient_more_options_button"
//                     aria-label="More options"
//                     onClick={toggleMenu}
//                 >
//                     <span className="more-dots">⋯</span>
//                 </button>
//                 {isMenuOpen && (
//                     <div ref={menuRef} className="reddit_rsharp_singleton_scoped_transient_more_options_menu">
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Report this comment">Report</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Save this comment">Save</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Award this comment">Award</button>
//                         <button className="reddit_rsharp_singleton_scoped_transient_menu_item" aria-label="Share this comment">Share</button>
//                     </div>
//                 )}
//             </div>
//             <div className="reddit_rsharp_singleton_scoped_transient_comment_content">
//                 <p>This is a comment about Singleton, Scoped, and Transient.</p>
//             </div>
//         </div>
//     );
// };

// export default RedditRSharpSingletonScopedTransient;
