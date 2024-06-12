"use client";
import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LocationIcon from "@/components/icons/LocationIcon";
import Header from "@/components/common/Header";
import { Tag } from "@/components/ui/Tag";
import Link from "next/link";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";
import RecommendTravelCard from "../../components/RecommendTravelCard/RecommendTravelCard";
import ReviewCard from "../../components/Review/ReviewCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const page = () => {
  const detailDumy = {
    "id": 1,
    "placeId": "1",
    "name": "경주",
    "formattedAddress": "string",
    "location": {
      "lat": 0,
      "lng": 0
    },
    "description": "경주는 대한민국의 역사적 중심지로서, 고려시대의 문화와 유적으로 유명하다. 석굴암과 불국사는 대표적인 유네스코 세계문화유산으로 등재되어 있으며, 안압지는 아름다운 조경과 함께 역사적인 가치를 지니고 있다.",
    "tags": [
      "#세계문화유산", "#역사 중심지",
    ],
    "photoUrls": [
      "https://www.ghibli.jp/gallery/ponyo016.jpg", "https://www.ghibli.jp/gallery/ponyo016.jpg", "https://www.ghibli.jp/gallery/ponyo016.jpg"
    ],
    "placeType": "CITY",
    "likeCount": 0,
    "userId": 0,
    "isLiked": true
  }

  const recommendTravelList= [{
    "id": 1,
    "imageSrc": "https://www.ghibli.jp/gallery/ponyo016.jpg",
    "title": "월정교",
    "star": 4.9,
  },{
    "id": 2,
    "imageSrc": "https://www.ghibli.jp/gallery/ponyo016.jpg",
    "title": "경주 동궁과 월지",
    "star": 4.9,
  }]

  const reviewList = [{
    "id": 1,
    "userId": 'Soo2022',
    "userImageSrc": "https://www.ghibli.jp/gallery/ponyo016.jpg",
    "date": '24.3.20',
    "star": 4.9,
    "likeCount": 14,
    "commentCount": 2,
    "comment": "경주 뚜벅이 여행! 시내 도보 여행 코스 한옥 주변 볼거리도 많고 맛집들도 많고 사진찍기 너무좋았어요!",
  },{
    "id": 2,
    "userId": 'tnw1004',
    "userImageSrc": "https://www.ghibli.jp/gallery/ponyo016.jpg",
    "date": '24.3.20',
    "star": 4.9,
    "likeCount": 22,
    "commentCount": 0,
    "comment": "두번째 댓글 경주 뚜벅이 여행! 시내 도보 여행 코스 한옥 주변 볼거리도 많고 맛집들도 많고 사진찍기 너무좋았어요!",
  }];

return <>
    {/* header */}
    {/* place image */}
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ type: 'fraction' }}
    >
      {detailDumy.photoUrls?.map((url,idx)=>{
        return(
          <SwiperSlide key={idx}>
            <Image
              src={url}
              alt="travel"
              className="object-cover rounded-lg h-[20rem] w-full"
              width={375}
              height={250}
            />
        </SwiperSlide>
        )  
      })}
    </Swiper>
    {/* info */}
    <div className="py-3 px-4">
      <div className="flex">
        <LocationIcon />
        <p className="text-lg">{detailDumy.name}</p>
      </div>
      {/* tags */}
      <div className="w-full auto-cols-max grid-flow-col gap-2 pt-3 pb-4">
      {detailDumy.tags?.map((tag,idx)=>{
        return(
          <Tag key={tag} variant="outline">
            <p className="flex items-center justify-center text-xs text-text-darker">
              {tag}
            </p>
          </Tag>
        )
      })}
      </div>
      <div className="text-base">{detailDumy.description}</div>
      {/* recommend travel */}
      <div className="flex justify-between mb-3 mt-6 ">
        <div>
          <b className="text-lg">{'주변 여행지 추천'}</b>
          <span className="text-[12px] ml-2.5">{'지도로 보기'}</span>
        </div>
        <Link href={"/place-trending"} className="text-[#b8b8b8] text-xs">더보기</Link>
      </div>
      {recommendTravelList.map(recommendTravel => (
        <RecommendTravelCard recommend={recommendTravel}/>
      ))}
      {/* review */}
      <div className="mt-6">
        <WithTitleWrapper title="리뷰" moreHref="/review">
          <Swiper slidesPerView={'auto'} className="w-100">
            {reviewList?.map((review, idx) => {
              return(
                <SwiperSlide className={"flex flex-1 basis-[70%] mr-[2.6%] shadow-[0_2px_20px_0_rgba(189,216,204,0.5)] last:sm:mr-[12%]"} key={idx}>
                  <ReviewCard review={review}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </WithTitleWrapper>
          </div>
    </div>
  </>;
};

export default page;