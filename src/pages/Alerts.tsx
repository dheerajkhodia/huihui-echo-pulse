import { Layout } from "@/components/Layout";
import { Heart, MessageCircle, Repeat2, UserPlus, Zap } from "lucide-react";

const mockAlerts = [
  {
    id: "1",
    type: "like",
    user: {
      username: "alextech",
      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=alextech&backgroundColor=transparent"
    },
    content: "liked your post",
    preview: "Just discovered this amazing new framework...",
    timestamp: "5m",
    unread: true
  },
  {
    id: "2", 
    type: "comment",
    user: {
      username: "designguru",
      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=designguru&backgroundColor=transparent"
    },
    content: "commented on your post",
    preview: "Totally agree! Clean code is everything.",
    timestamp: "12m",
    unread: true
  },
  {
    id: "3",
    type: "repost", 
    user: {
      username: "buildinpublic",
      avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=buildinpublic&backgroundColor=transparent"
    },
    content: "reposted your post",
    preview: "Minimalism isn't about having less...",
    timestamp: "1h",
    unread: false
  },
  {
    id: "4",
    type: "follow",
    user: {
      username: "midnight_coder",
      avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=midnight_coder&backgroundColor=transparent"
    },
    content: "started following you",
    preview: null,
    timestamp: "2h",
    unread: false
  },
  {
    id: "5",
    type: "echo",
    user: null,
    content: "Your post hit 5,000 EchoPoints!",
    preview: "Building cool stuff with code...",
    timestamp: "3h",
    unread: false
  }
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case "like":
      return <Heart size={16} className="text-red-500" />;
    case "comment":
      return <MessageCircle size={16} className="text-primary" />;
    case "repost":
      return <Repeat2 size={16} className="text-green-500" />;
    case "follow":
      return <UserPlus size={16} className="text-primary" />;
    case "echo":
      return <Zap size={16} className="text-echo-glow" />;
    default:
      return <Zap size={16} className="text-text-muted" />;
  }
};

export default function Alerts() {
  const unreadCount = mockAlerts.filter(alert => alert.unread).length;

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="sticky top-0 bg-surface-elevated/95 backdrop-blur-lg border-b border-border z-40">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">Alerts</h1>
              {unreadCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
            <button className="text-sm text-primary hover:text-primary/80">
              Mark all read
            </button>
          </div>
        </header>

        <div className="divide-y divide-border">
          {mockAlerts.map((alert) => (
            <div 
              key={alert.id}
              className={`p-4 hover:bg-muted/30 transition-colors cursor-pointer tap-feedback ${
                alert.unread ? 'bg-primary/5 border-l-2 border-l-primary' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar or Icon */}
                {alert.user ? (
                  <img 
                    src={alert.user.avatar}
                    alt={`${alert.user.username}'s avatar`}
                    className="w-10 h-10 rounded-full bg-muted"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center">
                    {getAlertIcon(alert.type)}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  {/* Alert Content */}
                  <div className="flex items-center gap-2 mb-1">
                    {getAlertIcon(alert.type)}
                    <span className="text-sm">
                      {alert.user && (
                        <span className="font-semibold">{alert.user.username}</span>
                      )}
                      {" "}{alert.content}
                    </span>
                  </div>

                  {/* Preview */}
                  {alert.preview && (
                    <p className="text-text-muted text-sm truncate">
                      "{alert.preview}"
                    </p>
                  )}

                  {/* Timestamp */}
                  <div className="text-text-muted text-xs mt-1">
                    {alert.timestamp}
                  </div>
                </div>

                {/* Unread Indicator */}
                {alert.unread && (
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (when no alerts) */}
        {mockAlerts.length === 0 && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-text-muted" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">No alerts yet</h3>
            <p className="text-text-muted">
              When people interact with your posts, you'll see it here.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}