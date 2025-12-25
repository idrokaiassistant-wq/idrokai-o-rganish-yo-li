import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface XPBadgeProps {
  xp: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function XPBadge({ xp, size = "md", className }: XPBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 18,
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full gradient-xp font-bold text-xp-foreground shadow-soft",
        sizeClasses[size],
        className
      )}
    >
      <Star className="fill-current" size={iconSizes[size]} />
      <span>{xp.toLocaleString()} XP</span>
    </div>
  );
}
