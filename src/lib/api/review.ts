import { ResponseReview } from "../types/review";

export const ReviewAPI = {
  getReviews: async (): Promise<ResponseReview> => {
    const data = await (
      await fetch(process.env.API_HOST + `/reviews`, {
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
