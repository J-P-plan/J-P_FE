"use client";

import Card from "./context/CardProvider";
import React from "react";

const ReviewCard = () => {
  const card = {
    starRating: 4,
    commentCount: 5,
    imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    title: "세번째 카드 종류",
    description: "설명도 있음",
    userName: "yunnnn",
    userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
  };
  return (
    <div className="flex items-center gap-4 px-4 py-4 border rounded-md bg-white">
      <Card card={card}>
        <Card.CardImage />
        <div className="flex flex-col gap-2 flex-1">
          <Card.CardTitle />
          <div className="flex w-full items-center justify-between">
            <Card.UserInfo />
            <div className="flex items-center gap-4">
              <Card.StarButton />
              <Card.CommandButton />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
