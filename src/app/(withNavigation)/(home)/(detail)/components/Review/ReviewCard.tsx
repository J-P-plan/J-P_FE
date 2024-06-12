"use client";
import { Card } from "@/components/common/cards/context/CardProvider";
import React from "react";
import { Review } from "@/lib/types/detail";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="flex items-center gap-4 p-2 mb-3 border rounded-md bg-white last:md:mr-[30px]">
      <Card card={review}>
        <Card.CardProfileImage />
          <Card.CardTitle />
          <div className="flex w-full">
            <div className="flex items-center">
              <Card.StarButton />
            </div>
          </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
