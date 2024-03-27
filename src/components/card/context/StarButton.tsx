import React, { useState } from "react";
import { Star, StarOff } from "lucide-react";

import { Button } from "../../ui/button";
import { useCardContext } from "./CardProvider";

const StarButton = () => {
  const { isStar, starCount } = useCardContext();
  const [star, setStar] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {isStar ? (
        // [todo]: change click event to update like Api
        <Button
          size="icon"
          variant="ghost"
          className="w-6 h-6"
          onClick={() => setStar(false)}
        >
          <Star />
        </Button>
      ) : (
        <Button
          size="icon"
          variant="ghost"
          className="w-6 h-6"
          onClick={() => setStar(true)}
        >
          <StarOff />
        </Button>
      )}
      <span className="text-xs">{star ? starCount! + 1 : starCount}</span>
    </div>
  );
};

export default StarButton;
