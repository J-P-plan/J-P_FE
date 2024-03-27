import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

import React from "react";
import { useCardContext } from "./CardProvider";

const UserInfo = () => {
  const { userName, userImageSrc } = useCardContext();
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={userImageSrc} alt={userName} />
        <AvatarFallback>{userName}</AvatarFallback>
      </Avatar>
      <div className="text-md">{userName}</div>
    </div>
  );
};

export default UserInfo;
