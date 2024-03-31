import React, { useState } from "react";
import { Star, StarOff } from "lucide-react";

import { Button } from "../../Button";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const StarButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { isStar, starCount } = useCardContext();
  const [star, setStar] = useState(false);

  return (
    // [todo]: change click event to update like Api
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      className={cn("flex items-center gap-2 w-6 h-6", className)}
      onClick={() => {
        setStar(!star);
      }}
      {...props}
    >
      {isStar ? <Star /> : <StarOff />}
      <span className="text-xs">{star ? starCount! + 1 : starCount}</span>
    </Button>
  );
});

StarButton.displayName = "StarButton";

export default StarButton;
