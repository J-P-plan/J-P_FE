import { IResponseReview } from "@/lib/types/travel";

export const reviewResponse: IResponseReview = {
  pageInfo: {
    page: 1,
    hasNext: 1,
    hasPrevious: 0,
    totalElements: 4,
    totalPages: 1,
  },
  data: [
    {
      id: 1,
      score: 3.5,
      commentCount: 10,
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      title: "리뷰 1",
      description: "리뷰 1의 설명",
      userName: "yun",
      userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
    {
      id: 2,
      score: 4,
      commentCount: 23,
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      title: "리뷰 2",
      description: "리뷰 2의 설명",
      userName: "yn",
      userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
    {
      id: 3,
      score: 2.5,
      commentCount: 5,
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      title: "리뷰 3",
      description: "리뷰 3의 설명",
      userName: "ㅎㅎㅋㅋ",
      userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
    {
      id: 4,
      score: 1.5,
      commentCount: 5,
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      title: "리뷰 4",
      description: "리뷰 4의 설명",
      userName: "nnnn",
      userImageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
  ],
};
