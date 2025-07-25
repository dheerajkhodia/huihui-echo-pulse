import { Heart, MessageCircle, Repeat2, MoreHorizontal } from "lucide-react";
import { EchoMeter } from "./EchoMeter";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: {
    id: string;
    username: string;
    avatar: string;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    reposts: number;
    echoPoints: number;
    isLiked?: boolean;
    isReposted?: boolean;
  };
  onClick?: () => void;
  className?: string;
}

export function PostCard({ post, onClick, className }: PostCardProps) {
  const handleAction = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <article 
      className={cn(
        "bg-card rounded-xl p-4 post-card cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <img 
          src={post.avatar} 
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full bg-muted"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground truncate">
              {post.username}
            </span>
            <span className="text-text-muted text-sm">
              {post.timestamp}
            </span>
          </div>
        </div>
        <button 
          className="text-text-muted hover:text-foreground p-1 rounded-lg hover:bg-muted tap-feedback"
          onClick={(e) => handleAction(e, () => console.log('More options'))}
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-foreground leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
      </div>

      {/* EchoMeter */}
      <div className="mb-4">
        <EchoMeter points={post.echoPoints} />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between text-text-secondary">
        <button 
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg transition-all tap-feedback",
            post.isLiked 
              ? "text-red-500 bg-red-500/10" 
              : "hover:text-red-500 hover:bg-red-500/10"
          )}
          onClick={(e) => handleAction(e, () => console.log('Like'))}
        >
          <Heart size={16} className={post.isLiked ? "fill-current" : ""} />
          <span className="text-sm font-medium">{post.likes}</span>
        </button>

        <button 
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:text-primary hover:bg-primary/10 transition-all tap-feedback"
          onClick={(e) => handleAction(e, () => console.log('Comment'))}
        >
          <MessageCircle size={16} />
          <span className="text-sm font-medium">{post.comments}</span>
        </button>

        <button 
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg transition-all tap-feedback",
            post.isReposted 
              ? "text-green-500 bg-green-500/10" 
              : "hover:text-green-500 hover:bg-green-500/10"
          )}
          onClick={(e) => handleAction(e, () => console.log('Repost'))}
        >
          <Repeat2 size={16} />
          <span className="text-sm font-medium">{post.reposts}</span>
        </button>
      </div>
    </article>
  );
}