import { Button } from "../../ui/button";
import { CircleIcon } from "lucide-react";
import React from "react";
import { useCardContext } from "./CardProvider";

const CommandButton = () => {
  const { commandCount } = useCardContext();
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="ghost"
        className="w-6 h-6"
        onClick={() => {}}
      >
        <CircleIcon />
      </Button>
      <span className="text-xs">{commandCount}</span>
    </div>
  );
};

export default CommandButton;
