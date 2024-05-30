import { GetPlaceListDTO, ResponsePlaceList } from "../types/placeList";
import QueryString from "qs";
export const PlaceListAPI = {
  getPlaceList: async (dto: GetPlaceListDTO): Promise<ResponsePlaceList> => {
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
