import { Button } from "../../../ui/button";
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
        "flex items-center gap-1 p-0.5 align-baseline text-xs text-text-lighter",
        className
      )}
      onClick={() => {}}
      {...props}
    >
      <CommentIcon className="size-4" />
      {commentCount}
    </Button>
  );
});

CommentButton.displayName = "CommentButton";

export default CommentButton;
