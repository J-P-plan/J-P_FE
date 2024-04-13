import React from "react";
import TravelStoryCard from "@/components/ui/cards/TravelStoryCard";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

const TravelStoryList = () => {
  return (
    <WithTitleWrapper title="지금뜨는 여행기">
      <div className="flex flex-col gap-2">
        <TravelStoryCard />
        <TravelStoryCard />
      </div>
    </WithTitleWrapper>
  );
};

export default TravelStoryList;
