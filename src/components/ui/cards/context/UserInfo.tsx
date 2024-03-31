import { Avatar, AvatarFallback, AvatarImage } from "../../Avatar";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const UserInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { userName, userImageSrc } = useCardContext();
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <Avatar>
        <AvatarImage src={userImageSrc} alt={userName} />
        <AvatarFallback>{userName}</AvatarFallback>
      </Avatar>
      <div className="text-md">{userName}</div>
    </div>
  );
});

UserInfo.displayName = "UserInfo";

export default UserInfo;
