"use client";

import { Card } from "@/components/common/cards/context/CardProvider";
import React from "react";
import { Review } from "@/lib/types/review";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {

  const cardDto = {
    title: review.subject,
    description: review.content,
    imageUrl: review.imageSrc,
    userImageSrc: review.userCompactResDto.picture,
    userName: review.userCompactResDto.nickname,
    star: review.star,
    commentCount: review.commentCnt,
  };

  return (
    <div className="items-center gap-4 p-2 mb-3 border rounded-md bg-white last:md:mr-[30px]">
      <Card card={cardDto}>
        <div className="flex space-x-10">
          <Card.UserInfo />
          <Card.StarButton />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Card.CardDescription />
          <div className="w-full">
            <div className="flex items-center gap-2">
              <Card.LikeButton />
              <Card.CommandButton />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
