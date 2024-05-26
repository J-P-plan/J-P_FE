import React from "react";
import { TravelLogAPI } from "@/lib/api/travelLog";
import TravelLogCard from "@/components/ui/cards/TravelLogCard";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

const TravelLogList = async () => {
  const { data: travelLogs } = await TravelLogAPI.getTravelLogs();

  return (
    <WithTitleWrapper title="지금뜨는 여행기" moreHref="story">
      <div className="flex flex-col gap-2">
        {[...travelLogs].slice(0, 2).map(travelLog => (
          <TravelLogCard key={travelLog.id} travelLog={travelLog} />
        ))}
      </div>
    </WithTitleWrapper>
  );
};

export default TravelLogList;
