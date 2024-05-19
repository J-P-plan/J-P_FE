import React from "react";
import { ResponseTravelLog } from "@/lib/types/reviewTravel";
import TravelLogCard from "@/components/ui/cards/TravelStoryCard";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

async function getTravelLogs() {
  const response = await fetch(`${process.env.API_HOST}/travel-log`);

  const travelLogs: ResponseTravelLog = await response.json();

  return travelLogs;
}

const TravelLogList = async () => {
  const travelLogs = await getTravelLogs();

  return (
    <WithTitleWrapper title="지금뜨는 여행기" moreHref="story">
      <div className="flex flex-col gap-2">
        {[...travelLogs.data].slice(0, 2).map(travelLog => (
          <TravelLogCard key={travelLog.id} travelLog={travelLog} />
        ))}
      </div>
    </WithTitleWrapper>
  );
};

export default TravelLogList;
