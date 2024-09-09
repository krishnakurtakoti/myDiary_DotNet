// types.ts (or you can place this in the same file if preferred)
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