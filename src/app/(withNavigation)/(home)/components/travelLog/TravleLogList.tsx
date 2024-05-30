import React from "react";
import { TravelLogAPI } from "@/lib/api/travelLog";
import TravelLogCard from "./TravelLogCard";
import WithTitleWrapper from "@/components/common/wrapper/WithTitleWrapper";

const TravelLogList = async () => {
  const { data: travelLogs } = await TravelLogAPI.getTravelLogs();

  return (
    <WithTitleWrapper title="사람들이 찜한 여행기" moreHref="travel-log">
      <div className="flex flex-col gap-2">
        {travelLogs?.slice(0, 2).map(travelLog => (
          <TravelLogCard key={travelLog.id} travelLog={travelLog} />
        ))}
      </div>
    </WithTitleWrapper>
  );
};

export default TravelLogList;
