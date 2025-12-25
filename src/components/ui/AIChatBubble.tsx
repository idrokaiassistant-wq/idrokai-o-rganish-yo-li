import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIChatBubbleProps {
  message: string;
  isAI?: boolean;
  timestamp?: string;
  className?: string;
}

export function AIChatBubble({
  message,
  isAI = false,
  timestamp,
  className,
}: AIChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex gap-3",
        isAI ? "flex-row" : "flex-row-reverse",
        className
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
          isAI ? "gradient-hero" : "bg-secondary"
        )}
      >
        {isAI ? (
          <Bot className="w-5 h-5 text-primary-foreground" />
        ) : (
          <User className="w-5 h-5 text-secondary-foreground" />
        )}
      </div>

      {/* Message bubble */}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-3",
          isAI
            ? "bg-card shadow-soft rounded-tl-sm"
            : "gradient-hero text-primary-foreground rounded-tr-sm"
        )}
      >
        {isAI && (
          <p className="text-xs font-semibold text-primary mb-1">AI Ustoz</p>
        )}
        <p className={cn("text-sm leading-relaxed", isAI && "text-card-foreground")}>
          {message}
        </p>
        {timestamp && (
          <p
            className={cn(
              "text-2xs mt-2",
              isAI ? "text-muted-foreground" : "text-primary-foreground/70"
            )}
          >
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
