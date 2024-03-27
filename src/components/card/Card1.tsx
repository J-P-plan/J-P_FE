"use client";

import Card from "./context/CardProvider";
import React from "react";

const Card1 = () => {
  const card = {
    isLike: true,
    likeCount: 10,
    commandCount: 5,
    imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    tagList: ["#서울", "#대전"],
    title: "첫번째 카드",
    userName: "신윤철",
    userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
  };
  return (
    <div className="flex gap-4 items-center px-4 py-4 border rounded-md bg-white">
      <Card card={card}>
        <Card.CardImage />
        <div className="flex flex-col gap-4 flex-1">
          <Card.CardTags />
          <Card.CardTitle />
          <div className="flex w-full justify-between">
            <Card.UserInfo />
            <div className="flex gap-4">
              <Card.LikeButton />
              <Card.CommandButton />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Card1;
