import { Badge } from "../../ui/badge";
import React from "react";
import { useCardContext } from "./CardProvider";

const CardTags = () => {
  const { tagList } = useCardContext();

  return (
    <div>
      {tagList?.map(tag => (
        <Badge key={tag} variant="default">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default CardTags;
