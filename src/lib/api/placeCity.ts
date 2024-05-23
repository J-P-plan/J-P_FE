import { GetPlaceCityDTO, ResponsePlaceCity } from "../types/placeCity";

import QueryString from "qs";

export const PlaceCityAPI = {
  getPlaceCitys: async (dto: GetPlaceCityDTO): Promise<ResponsePlaceCity> => {
    const data = await (
      await fetch(
        process.env.API_HOST + `/place/page?${QueryString.stringify(dto)}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          next: { revalidate: 600 },
        }
      )
    ).json();

    return {
      data: data.data,
      pageInfo: data.pageInfo,
    };
  },
};
