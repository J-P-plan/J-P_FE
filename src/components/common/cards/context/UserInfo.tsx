import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";

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
        <AvatarImage src={userImageSrc} alt={userName} width={24} height={24} />
        {/* [TODO]: change userName -> loading image */}
        <AvatarFallback>{userName}</AvatarFallback>
      </Avatar>
      <div className="flex items-center text-xs text-text-darkest">
        {userName}
      </div>
    </div>
  );
});

UserInfo.displayName = "UserInfo";

export default UserInfo;
