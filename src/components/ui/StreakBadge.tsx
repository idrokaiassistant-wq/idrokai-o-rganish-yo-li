import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakBadgeProps {
  days: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StreakBadge({ days, size = "md", className }: StreakBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-accent font-bold text-accent-foreground shadow-soft",
        sizeClasses[size],
        className
      )}
    >
      <Flame className="fill-current animate-pulse" size={iconSizes[size]} />
      <span>{days} kun</span>
    </div>
  );
}
