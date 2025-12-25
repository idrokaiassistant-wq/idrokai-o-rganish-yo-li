import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface HintSelectorProps {
  level: 1 | 2 | 3;
  onLevelChange: (level: 1 | 2 | 3) => void;
  className?: string;
}

export function HintSelector({ level, onLevelChange, className }: HintSelectorProps) {
  const levels = [
    { value: 1 as const, label: "Yengil", desc: "Kichik maslahat" },
    { value: 2 as const, label: "O'rta", desc: "Ko'proq yordam" },
    { value: 3 as const, label: "Kuchli", desc: "Batafsil tushuntirish" },
  ];

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Lightbulb size={16} className="text-warning" />
        <span>Maslahat darajasi</span>
      </div>
      <div className="flex gap-2">
        {levels.map((l) => (
          <button
            key={l.value}
            onClick={() => onLevelChange(l.value)}
            className={cn(
              "flex-1 rounded-xl px-3 py-2 text-center transition-all duration-200",
              level === l.value
                ? "gradient-hero text-primary-foreground shadow-soft"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            <div className="font-semibold text-sm">{l.label}</div>
            <div className="text-2xs opacity-80">{l.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
