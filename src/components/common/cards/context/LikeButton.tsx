import React, { useState } from "react";

import { Button } from "../../../ui/button";
import HeartIcon from "@/components/icons/HeartIcon";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const LikeButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { isLike, likeCount } = useCardContext();
  const [like, setLike] = useState(false);

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
      onClick={() => setLike(!like)}
      {...props}
    >
      <HeartIcon
        className="size-4"
        fill={isLike ? "red" : "none"}
        stroke={isLike ? "red" : "#b8b8b8"}
      />
      {like ? likeCount! + 1 : likeCount}
    </Button>
  );
});

LikeButton.displayName = "LikeButton";

export default LikeButton;
