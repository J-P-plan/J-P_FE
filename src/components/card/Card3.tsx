"use client";

import Card from "./context/CardProvider";
import React from "react";

const Card3 = () => {
  const card = {
    isStar: true,
    starCount: 10,
    commandCount: 5,
    imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    title: "세번째 카드 종류",
    description: "설명도 있음",
    userName: "yunnnn",
    userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
  };
  return (
    <div className="flex gap-4 items-center px-4 py-4 border rounded-md bg-white">
      <Card card={card}>
        <Card.CardImage />
        <div className="flex flex-col gap-4">
          <Card.CardTitle />
          <div className="flex gap-4">
            <Card.UserInfo />
            <div className="flex gap-4">
              <Card.StarButton />
              <Card.CommandButton />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Card3;
