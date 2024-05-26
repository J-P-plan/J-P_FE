import { ResponseReview } from "@/lib/types/review";

export const reviewResponse: ResponseReview = {
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
      subject: "리뷰 1",
      content: "리뷰 1의 설명",
      userCompactResDto: {
        id: 1,
        nickname: "yun",
        picture: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      },
      commentCnt: 3,
      star: 3.5,
      placeId: "asd12ddasdasd",
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
    {
      id: 2,
      subject: "리뷰 2",
      content: "리뷰 2의 설명",
      userCompactResDto: {
        id: 3,
        nickname: "yun12",
        picture: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      },
      commentCnt: 10,
      star: 4.5,
      placeId: "asd12dda124sdasd",
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
    {
      id: 3,
      subject: "리뷰 3",
      content: "리뷰 3의 설명",
      userCompactResDto: {
        id: 2,
        nickname: "yun2",
        picture: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      },
      commentCnt: 10,
      star: 3,
      placeId: "asd12ddasda132sd",
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
    {
      id: 4,
      subject: "리뷰 4",
      content: "리뷰 4의 설명",
      userCompactResDto: {
        id: 22,
        nickname: "yun212",
        picture: "https://www.ghibli.jp/gallery/ponyo016.jpg",
      },
      commentCnt: 5,
      star: 2.5,
      placeId: "asd12ddasda22sd",
      imageSrc: "https://www.ghibli.jp/gallery/ponyo016.jpg",
    },
  ],
};
