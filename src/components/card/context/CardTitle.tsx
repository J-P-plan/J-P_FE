import React from "react";
import { useCardContext } from "./CardProvider";

const CardTitle = () => {
  const { title, description } = useCardContext();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};

export default CardTitle;
