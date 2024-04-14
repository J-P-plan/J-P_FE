"use client";

import Card from "./context/CardProvider";
import { IReview } from "@/lib/types/travel";
import React from "react";

interface Props {
  review: IReview;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="flex items-center gap-4 px-4 py-4 border rounded-md bg-white">
      <Card card={review}>
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
