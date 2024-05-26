import { ResponseTravelLog } from "../types/travelLog";

export const TravelLogAPI = {
  getTravelLogs: async (): Promise<ResponseTravelLog> => {
    const data = await (
      await fetch(process.env.API_HOST + `/travel-logs`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 600 },
      })
    ).json();

    return {
      data: data.data,
      pageInfo: data.pageInfo,
    };
  },
};
