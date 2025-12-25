import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onSelect?: () => void;
  className?: string;
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText,
  onSelect,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1",
        isPopular
          ? "gradient-hero text-primary-foreground shadow-glow scale-105"
          : "bg-card shadow-card",
        className
      )}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 rounded-full bg-warning px-3 py-1 text-xs font-bold text-warning-foreground">
            <Star size={12} className="fill-current" />
            Mashhur
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className={cn(
          "text-xl font-bold mb-2",
          !isPopular && "text-card-foreground"
        )}>
          {title}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-extrabold">{price}</span>
          {period && (
            <span className={cn(
              "text-sm",
              isPopular ? "opacity-80" : "text-muted-foreground"
            )}>
              /{period}
            </span>
          )}
        </div>
        <p className={cn(
          "text-sm mt-2",
          isPopular ? "opacity-90" : "text-muted-foreground"
        )}>
          {description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className={cn(
              "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
              isPopular ? "bg-primary-foreground/20" : "bg-success/20"
            )}>
              <Check size={12} className={isPopular ? "text-primary-foreground" : "text-success"} />
            </div>
            <span className={cn(
              "text-sm",
              !isPopular && "text-card-foreground"
            )}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Button
        onClick={onSelect}
        variant={isPopular ? "secondary" : "default"}
        className={cn(
          "w-full rounded-xl font-semibold",
          isPopular && "bg-card text-primary hover:bg-card/90"
        )}
      >
        {buttonText}
      </Button>
    </div>
  );
}
