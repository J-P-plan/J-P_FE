import { Button } from "../../button";
import React from "react";
import StarIcon from "@/components/icons/StartIcon";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const StarButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { score } = useCardContext();

  return (
    // [todo]: change click event to update like Api
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      <StarIcon className="w-4 h-4" />
      <span className="flex items-center text-[#b8b8b8] text-xs">{score}</span>
    </Button>
  );
});

StarButton.displayName = "StarButton";

export default StarButton;
