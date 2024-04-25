import { Button } from "../../button";
import CommentIcon from "@/components/icons/CommentIcon";
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
      className={cn(
        "flex items-center align-baseline gap-1 text-[#b8b8b8] text-xs",
        className
      )}
      onClick={() => {}}
      {...props}
    >
      <CommentIcon className="w-4 h-4" />
      {commentCount}
    </Button>
  );
});

CommentButton.displayName = "CommentButton";

export default CommentButton;
