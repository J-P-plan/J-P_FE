import { Button } from "../../Button";
import { CircleIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const CommentButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { commentCount } = useCardContext();
  return (
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      className={cn("flex items-center gap-2 w-6 h-6", className)}
      onClick={() => {}}
      {...props}
    >
      <CircleIcon />
      <span className="text-xs">{commentCount}</span>
    </Button>
  );
});

CommentButton.displayName = "CommentButton";

export default CommentButton;
