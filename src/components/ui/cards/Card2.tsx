"use client";

import Card from "./context/CardProvider";
import React from "react";

const Card2 = () => {
  const card = {
    isLike: true,
    likeCount: 10,
    commentCount: 5,
    tagList: ["#나들이", "#벚꽃여행", "#봄여행"],
    title: "드라이브, 산책 코스로 딱 좋았던 섬진강길",
    userName: "Jiyuoo",
    userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
  };
  return (
    <div className="flex flex-col gap-4 px-4 py-4 border rounded-md bg-white">
      <Card card={card}>
        <Card.UserInfo />
        <Card.CardTitle />
        <Card.CardTags />
        <div className="flex gap-4">
          <Card.CommandButton />
          <Card.LikeButton />
        </div>
      </Card>
    </div>
  );
};

export default Card2;
