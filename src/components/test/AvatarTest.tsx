import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import React from "react";

const AvatarTest = () => {
  return (
    <Avatar>
      <AvatarImage
        src="https://www.ghibli.jp/gallery/ponyo016.jpg"
        alt="Ponyo"
      />
      <AvatarFallback>🐟</AvatarFallback>
    </Avatar>
  );
};

export default AvatarTest;
