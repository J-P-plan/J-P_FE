"use client";

import Card from "./context/CardProvider";
import React from "react";
import { Review } from "@/lib/types/review";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-md border bg-white p-4">
      <Card card={review}>
        <Card.CardImage />
        <div className="flex flex-1 flex-col gap-2">
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
