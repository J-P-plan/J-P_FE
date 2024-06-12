"use client";
import { Card } from "@/components/common/cards/context/CardProvider";
import React from "react";
import { RecommendTravel } from "@/lib/types/detail";

interface Props {
  recommend: RecommendTravel;
}

const RecommendTravelCard = ({ recommend }: Props) => {
  return (
    <div className="flex items-center gap-4 px-4 py-4 mb-3 border rounded-md bg-white">
      <Card card={recommend}>
        <Card.CardImage />
        <div className="flex flex-col gap-2 flex-1">
          <Card.CardTitle />
          <div className="flex w-full">
            <div className="flex items-center">
              <Card.StarButton />
              <div className="w-1 h-50 px-2" />
              <p className="text-[12px]">{'위치 보기'}</p>
            </div>
          </div>
        </div>
        <div ><span className="text-[12px]">{'+ 추가'}</span></div>
      </Card>
    </div>
  );
};

export default RecommendTravelCard;