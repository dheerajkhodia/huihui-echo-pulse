import { Layout } from "@/components/Layout";
import { PostCard } from "@/components/PostCard";
import { Settings, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock user data
const mockUser = {
  username: "currentuser",
  avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=currentuser&backgroundColor=transparent",
  bio: "Building cool stuff with code ✨ | Coffee enthusiast ☕ | Night owl 🦉",
  followers: 1234,
  following: 567,
  posts: 89,
  joined: "March 2024",
  badges: ["Daily Top Echo", "Most Reposted"]
};

const mockUserPosts = [
  {
    id: "user1",
    username: "currentuser",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=currentuser&backgroundColor=transparent",
    content: "Just shipped a new feature that I'm really proud of! The journey from idea to implementation taught me so much about problem-solving and persistence.",
    timestamp: "1d",
    likes: 45,
    comments: 8,
    reposts: 12,
    echoPoints: 2340
  },
  {
    id: "user2",
    username: "currentuser", 
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=currentuser&backgroundColor=transparent",
    content: "Sometimes the best debugging technique is just explaining your code to a rubber duck. Or in my case, my cat who couldn't care less 🐱",
    timestamp: "3d",
    likes: 89,
    comments: 23,
    reposts: 5,
    echoPoints: 1890
  }
];

export default function Profile() {
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="sticky top-0 bg-surface-elevated/95 backdrop-blur-lg border-b border-border z-40">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">Profile</h1>
            <button className="p-2 hover:bg-muted rounded-lg tap-feedback">
              <Settings size={20} />
            </button>
          </div>
        </header>

        <div className="p-4">
          {/* Profile Info */}
          <div className="mb-6">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src={mockUser.avatar}
                alt={`${mockUser.username}'s avatar`}
                className="w-20 h-20 rounded-full bg-muted"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{mockUser.username}</h2>
                <p className="text-text-secondary mb-3 leading-relaxed">
                  {mockUser.bio}
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="text-text-muted">
                    Joined {mockUser.joined}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-around py-4 bg-surface-elevated rounded-xl mb-4">
              <div className="text-center">
                <div className="text-xl font-bold">{mockUser.posts}</div>
                <div className="text-text-muted text-sm">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">{mockUser.followers.toLocaleString()}</div>
                <div className="text-text-muted text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">{mockUser.following}</div>
                <div className="text-text-muted text-sm">Following</div>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-text-secondary mb-2">Badges</h3>
              <div className="flex flex-wrap gap-2">
                {mockUser.badges.map((badge) => (
                  <span 
                    key={badge}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <UserPlus size={16} className="mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="flex-1">
                <Users size={16} className="mr-2" />
                Share Profile
              </Button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your Posts</h3>
            {mockUserPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}