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
    <div className="flex items-center gap-4 rounded-md">
      <Card card={cardDto}>
        <Card.CardImage />
        <div className="flex flex-1 flex-col gap-2">
          <Card.CardTitle />
          <div className="flex w-full items-center justify-between">
            <Card.UserInfo />
            <div className="flex items-center gap-2">
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
