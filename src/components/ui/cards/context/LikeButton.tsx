import { Heart, HeartOff } from "lucide-react";
import React, { useState } from "react";

import { Button } from "../../Button";
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
      className={cn("flex items-center gap-2", className)}
      onClick={() => setLike(!like)}
      {...props}
    >
      {isLike ? <Heart size={20} /> : <HeartOff size={20} />}
      <span className="text-xs">{like ? likeCount! + 1 : likeCount}</span>
    </Button>
  );
});

LikeButton.displayName = "LikeButton";

export default LikeButton;
