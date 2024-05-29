import { Button } from "../../../ui/button";
import React from "react";
import StarIcon from "@/components/icons/StartIcon";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const StarButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { star } = useCardContext();

  return (
    // [todo]: change click event to update like Api
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      className={cn(
        "flex items-center gap-1 p-0.5 text-xs text-text-lighter",
        className
      )}
      {...props}
    >
      <StarIcon className="size-4" />
      {star}
    </Button>
  );
});

StarButton.displayName = "StarButton";

export default StarButton;
