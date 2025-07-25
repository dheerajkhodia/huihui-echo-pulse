import { cn } from "@/lib/utils";

interface EchoMeterProps {
  points: number;
  className?: string;
}

export function EchoMeter({ points, className }: EchoMeterProps) {
  // Base points start at 1000, calculate percentage for visual representation
  const normalizedPoints = Math.max(0, points - 1000);
  const percentage = Math.min(100, (normalizedPoints / 5000) * 100); // Cap visualization at 6000 points
  
  // Determine glow class based on points
  const getGlowClass = () => {
    if (points >= 5000) return "echo-viral";
    if (points >= 2000) return "echo-glow";
    return "";
  };

  const formatPoints = (points: number) => {
    if (points >= 1000000) return `${(points / 1000000).toFixed(1)}M`;
    if (points >= 1000) return `${(points / 1000).toFixed(1)}K`;
    return points.toString();
  };

  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center justify-between text-xs">
        <span className="text-text-muted">EchoMeter</span>
        <span className="text-text-secondary font-mono">
          {formatPoints(points)}
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out rounded-full",
            getGlowClass(),
            points >= 5000 
              ? "bg-echo-viral" 
              : points >= 2000 
              ? "bg-echo-glow" 
              : "bg-echo-low"
          )}
          style={{ width: `${Math.max(5, percentage)}%` }}
        />
      </div>
    </div>
  );
}