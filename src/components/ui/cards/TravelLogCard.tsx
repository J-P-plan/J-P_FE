"use client";

import Card from "./context/CardProvider";
import React from "react";
import { TravelLog } from "@/lib/types/travelLog";

interface Props {
  travelLog: TravelLog;
}

const TravelLogCard = ({ travelLog }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-md border bg-white p-4">
      <Card card={travelLog}>
        <Card.CardImage />
        <div className="flex flex-1 flex-col gap-2">
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
