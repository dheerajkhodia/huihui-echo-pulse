import { Layout } from "@/components/Layout";
import { PostCard } from "@/components/PostCard";
import { Plus, Zap } from "lucide-react";

// Mock data - replace with real data from Supabase
const mockPosts = [
  {
    id: "1",
    username: "alextech",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=alextech&backgroundColor=transparent",
    content: "Just discovered this amazing new framework that completely changed how I think about state management. The learning curve was steep but totally worth it! 🔥",
    timestamp: "2h",
    likes: 156,
    comments: 23,
    reposts: 12,
    echoPoints: 3420,
    isLiked: true
  },
  {
    id: "2", 
    username: "midnight_coder",
    avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=midnight_coder&backgroundColor=transparent",
    content: "Hot take: Writing clean, readable code is more important than clever optimizations. Your future self (and your teammates) will thank you.",
    timestamp: "4h",
    likes: 89,
    comments: 34,
    reposts: 7,
    echoPoints: 2150
  },
  {
    id: "3",
    username: "designguru",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=designguru&backgroundColor=transparent",
    content: "Minimalism isn't about having less. It's about making room for what matters most. This principle applies to design, code, and life.",
    timestamp: "6h",
    likes: 234,
    comments: 18,
    reposts: 45,
    echoPoints: 5670,
    isReposted: true
  },
  {
    id: "4",
    username: "buildinpublic",
    avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=buildinpublic&backgroundColor=transparent",
    content: "Day 127 of building my startup: Finally hit 1000 users! The journey has been incredible. Learned more in the past 4 months than in the previous 2 years. Grateful for every single user who believed in the vision.",
    timestamp: "8h",
    likes: 342,
    comments: 67,
    reposts: 89,
    echoPoints: 8950
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="sticky top-0 bg-surface-elevated/95 backdrop-blur-lg border-b border-border z-40">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Zap className="text-primary" size={24} />
              <h1 className="text-xl font-bold">HuiHui</h1>
            </div>
            <div className="text-sm text-text-muted">
              Home
            </div>
          </div>
        </header>

        {/* Posts Feed */}
        <div className="p-4 space-y-4">
          {mockPosts.map((post) => (
            <PostCard 
              key={post.id} 
              post={post}
              onClick={() => {
                // Navigate to post detail - implement with react-router
                console.log('Navigate to post', post.id);
              }}
            />
          ))}
        </div>

        {/* Floating Action Button */}
        <button 
          className="fixed bottom-20 right-4 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center tap-feedback z-50"
          onClick={() => {
            // Navigate to create post - implement with react-router
            console.log('Create post');
          }}
        >
          <Plus size={24} />
        </button>
      </div>
    </Layout>
  );
}