
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonateButtonProps {
  className?: string;
  size?: "default" | "lg";
  variant?: "default" | "outline";
}

const DonateButton = ({ 
  className, 
  size = "default", 
  variant = "default" 
}: DonateButtonProps) => {
  return (
    <Button 
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        variant === "default" ? "bg-gradient hover:opacity-90" : "border-2 border-pursuva-blue hover:border-pursuva-purple",
        size === "lg" ? "text-lg py-6 px-8" : "",
        className
      )}
    >
      <span className="flex items-center justify-center gap-2">
        <Heart 
          className={cn(
            "transition-transform group-hover:scale-110", 
            variant === "outline" ? "text-pursuva-blue group-hover:text-pursuva-purple" : ""
          )} 
          size={18} 
        />
        Donate Now
      </span>
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
    </Button>
  );
};

export default DonateButton;
