import { Heart, HeartOff } from "lucide-react";
import React, { useState } from "react";

import { Button } from "../../ui/button";
import { useCardContext } from "./CardProvider";

const LikeButton = () => {
  const { isLike, likeCount } = useCardContext();
  const [like, setLike] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {isLike ? (
        // [todo]: change click event to update like Api
        <Button
          size="icon"
          variant="ghost"
          className="w-6 h-6"
          onClick={() => setLike(false)}
        >
          <Heart size={20} />
        </Button>
      ) : (
        <Button
          size="icon"
          variant="ghost"
          className="w-6 h-6"
          onClick={() => setLike(true)}
        >
          <HeartOff />
        </Button>
      )}
      <span className="text-xs">{like ? likeCount! + 1 : likeCount}</span>
    </div>
  );
};

export default LikeButton;
