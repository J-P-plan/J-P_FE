import { IResponseTravelStory } from "@/lib/types/travel";
import React from "react";
import TravelStoryCard from "@/components/ui/cards/TravelStoryCard";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

async function getTravelStories() {
  const response = await fetch(`${process.env.API_HOST}/story`);

  const stories: IResponseTravelStory = await response.json();

  return stories;
}

const TravelStoryList = async () => {
  const stories = await getTravelStories();

  return (
    <WithTitleWrapper title="지금뜨는 여행기" moreHref="story">
      <div className="flex flex-col gap-2">
        {[...stories.data].slice(0, 2).map(story => (
          <TravelStoryCard key={story.id} story={story} />
        ))}
      </div>
    </WithTitleWrapper>
  );
};

export default TravelStoryList;
