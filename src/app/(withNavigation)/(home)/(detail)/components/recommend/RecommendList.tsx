import React from "react";
import { RecommendAPI } from "@/lib/api/recommend";
import RecommendCard from "./RecommendCard";
import WithTitleWrapper from "@/components/common/wrapper/WithTitleWrapper";


const RecommendList = async () => {
  // const { data: recommendList } = await RecommendAPI.getRecommends();
  const recommendList= [{
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


  return (    
    <div className="py-3 px-4">
      <WithTitleWrapper title="주변 여행지 추천" moreHref="/place-trending" useSideButton={true} sideButtonTitle="지도로 보기">
        {recommendList.map(recommend => (
          <RecommendCard recommend={recommend}/>
        ))}
      </WithTitleWrapper>
    </div>
  );
};

export default RecommendList;