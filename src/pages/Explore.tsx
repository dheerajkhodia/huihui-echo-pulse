import { Layout } from "@/components/Layout";
import { PostCard } from "@/components/PostCard";
import { Search, TrendingUp, Users, Flame } from "lucide-react";
import { Input } from "@/components/ui/input";

const trendingTopics = [
  { tag: "#BuildInPublic", posts: 1234 },
  { tag: "#TechThoughts", posts: 856 },
  { tag: "#MidnightCoding", posts: 432 },
  { tag: "#DesignPhilosophy", posts: 298 }
];

const suggestedUsers = [
  {
    username: "techvisionary",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=techvisionary&backgroundColor=transparent",
    followers: 12000,
    bio: "Building the future, one line at a time"
  },
  {
    username: "creativemind",
    avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=creativemind&backgroundColor=transparent", 
    followers: 8500,
    bio: "Design + Development = Magic ✨"
  }
];

const trendingPosts = [
  {
    id: "trend1",
    username: "viral_thoughts",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=viral_thoughts&backgroundColor=transparent",
    content: "The best part about being a developer? Every bug is just a feature request from chaos. Embrace the madness and code through it! 🚀",
    timestamp: "30m",
    likes: 892,
    comments: 156,
    reposts: 234,
    echoPoints: 15420
  },
  {
    id: "trend2",
    username: "wisdom_drops",
    avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=wisdom_drops&backgroundColor=transparent",
    content: "Success is not about knowing everything. It's about knowing where to find the answers and having the courage to ask the right questions.",
    timestamp: "1h",
    likes: 567,
    comments: 89,
    reposts: 123,
    echoPoints: 9870
  }
];

export default function Explore() {
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="sticky top-0 bg-surface-elevated/95 backdrop-blur-lg border-b border-border z-40">
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Explore</h1>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={16} />
              <Input 
                placeholder="Search posts, users, topics..."
                className="pl-10 bg-surface-elevated border-border"
              />
            </div>
          </div>
        </header>

        <div className="p-4 space-y-6">
          {/* Trending Topics */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-primary" size={20} />
              <h2 className="text-lg font-semibold">Trending Topics</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {trendingTopics.map((topic) => (
                <div 
                  key={topic.tag}
                  className="bg-surface-elevated rounded-lg p-3 hover:bg-muted/50 transition-colors cursor-pointer tap-feedback"
                >
                  <div className="font-semibold text-primary">{topic.tag}</div>
                  <div className="text-text-muted text-sm">
                    {topic.posts.toLocaleString()} posts
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Suggested Users */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-primary" size={20} />
              <h2 className="text-lg font-semibold">Suggested Users</h2>
            </div>
            <div className="space-y-3">
              {suggestedUsers.map((user) => (
                <div 
                  key={user.username}
                  className="bg-surface-elevated rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer tap-feedback"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={user.avatar}
                      alt={`${user.username}'s avatar`}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{user.username}</div>
                      <div className="text-text-muted text-sm">
                        {user.followers.toLocaleString()} followers
                      </div>
                      <div className="text-text-secondary text-sm truncate">
                        {user.bio}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors tap-feedback">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Posts */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="text-primary" size={20} />
              <h2 className="text-lg font-semibold">Trending Posts</h2>
            </div>
            <div className="space-y-4">
              {trendingPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}