"use client";

import Card from "./context/CardProvider";
import { ITravelStory } from "@/lib/types/travel";
import React from "react";

interface Props {
  story: ITravelStory;
}

const TravelStoryCard = ({ story }: Props) => {
  return (
    <div className="flex items-center gap-4 px-4 py-4 border rounded-md bg-white">
      <Card card={story}>
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

export default TravelStoryCard;
