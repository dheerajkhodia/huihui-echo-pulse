import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Create() {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const maxLength = 3000;
  const remaining = maxLength - content.length;

  const handleSubmit = () => {
    if (content.trim()) {
      // TODO: Submit to Supabase
      console.log("Posting:", content);
      navigate("/");
    }
  };

  return (
    <Layout showBottomNav={false}>
      <div className="max-w-md mx-auto h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-border">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-muted rounded-lg tap-feedback"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold">Create Post</h1>
          <button 
            onClick={handleSubmit}
            disabled={!content.trim()}
            className={cn(
              "px-4 py-2 rounded-lg font-medium transition-all tap-feedback",
              content.trim()
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-text-muted cursor-not-allowed"
            )}
          >
            <Send size={16} />
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://api.dicebear.com/7.x/pixel-art/svg?seed=currentuser&backgroundColor=transparent"
                alt="Your avatar"
                className="w-10 h-10 rounded-full bg-muted"
              />
              <span className="font-semibold">You</span>
            </div>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's echoing in your mind?"
            className="w-full h-80 bg-transparent text-foreground placeholder:text-text-muted border-none outline-none resize-none text-lg leading-relaxed"
            maxLength={maxLength}
            autoFocus
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-muted">
              Text only • Max {maxLength.toLocaleString()} characters
            </div>
            <div className={cn(
              "text-sm font-mono",
              remaining < 100 ? "text-destructive" : "text-text-secondary"
            )}>
              {remaining.toLocaleString()}
            </div>
          </div>
          
          {/* Character Progress Bar */}
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full transition-all duration-200",
                remaining < 100 ? "bg-destructive" : "bg-primary"
              )}
              style={{ width: `${((maxLength - remaining) / maxLength) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}