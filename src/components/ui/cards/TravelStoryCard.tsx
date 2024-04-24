"use client";

import Card from "./context/CardProvider";
import React from "react";

const TravelStoryCard = () => {
  const card = {
    isLike: true,
    likeCount: 10,
    commentCount: 5,
    imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    tagList: ["#서울", "#대전"],
    title: "첫번째 카드",
    userName: "신윤철",
    userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
  };

  return (
    <div className="flex items-center gap-4 px-4 py-4 border rounded-md bg-white">
      <Card card={card}>
        <Card.CardImage />
        <div className="flex flex-col gap-2 flex-1">
          <Card.CardTags />
          <Card.CardTitle />
          <div className="flex w-full items-center justify-between">
            <Card.UserInfo />
            <div className="flex items-center gap-4">
              <Card.LikeButton />
              <Card.CommandButton />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TravelStoryCard;
