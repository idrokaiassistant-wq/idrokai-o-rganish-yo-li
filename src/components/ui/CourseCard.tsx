import { Lock, BookOpen, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  lessonsCount: number;
  completedLessons: number;
  difficulty: "oson" | "o'rta" | "qiyin";
  isLocked?: boolean;
  image?: string;
  onClick?: () => void;
  className?: string;
}

export function CourseCard({
  title,
  description,
  lessonsCount,
  completedLessons,
  difficulty,
  isLocked = false,
  image,
  onClick,
  className,
}: CourseCardProps) {
  const progress = (completedLessons / lessonsCount) * 100;
  const isCompleted = completedLessons === lessonsCount;

  const difficultyColors = {
    oson: "bg-success text-success-foreground",
    "o'rta": "bg-warning text-warning-foreground",
    qiyin: "bg-accent text-accent-foreground",
  };

  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-300",
        !isLocked && "cursor-pointer hover:shadow-xl hover:-translate-y-1",
        isLocked && "opacity-70",
        className
      )}
    >
      {/* Course Image */}
      <div className="relative h-40 overflow-hidden bg-muted">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full gradient-hero opacity-20" />
        )}
        
        {/* Difficulty badge */}
        <Badge
          className={cn(
            "absolute top-3 right-3 rounded-full font-semibold",
            difficultyColors[difficulty]
          )}
        >
          {difficulty}
        </Badge>

        {/* Lock overlay */}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/50 backdrop-blur-sm">
            <Lock className="w-12 h-12 text-card" />
          </div>
        )}

        {/* Completed overlay */}
        {isCompleted && !isLocked && (
          <div className="absolute top-3 left-3">
            <div className="flex items-center gap-1 rounded-full bg-success px-2 py-1 text-xs font-bold text-success-foreground">
              <CheckCircle size={14} />
              Tugallandi
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Lessons count */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <BookOpen size={16} />
          <span>
            {completedLessons}/{lessonsCount} dars
          </span>
        </div>

        {/* Progress bar */}
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}
