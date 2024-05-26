"use client";

import Card from "./context/CardProvider";
import React from "react";
import { TravelLog } from "@/lib/types/travelLog";

interface Props {
  travelLog: TravelLog;
}

const TravelLogCard = ({ travelLog }: Props) => {
  return (
    <div className="flex items-center gap-4 px-4 py-4 border rounded-md bg-white">
      <Card card={travelLog}>
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

export default TravelLogCard;
