import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

interface LevelBadgeProps {
  level: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LevelBadge({ level, size = "md", className }: LevelBadgeProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-lg",
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 24,
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full gradient-hero text-primary-foreground font-bold shadow-glow",
        sizeClasses[size],
        className
      )}
    >
      <Trophy size={iconSizes[size]} className="absolute top-1 opacity-30" />
      <span className="relative z-10">{level}</span>
    </div>
  );
}
