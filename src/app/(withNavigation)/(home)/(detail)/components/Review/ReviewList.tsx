import React from "react";
import { ReviewAPI } from "@/lib/api/review";
import ReviewCard from "./ReviewCard";
import WithTitleWrapper from "@/components/common/wrapper/WithTitleWrapper";
import { Swiper, SwiperSlide } from "swiper/react";


const ReviewList = async () => {
  const { data: reviews } = await ReviewAPI.getReviews();

  return (    
    <WithTitleWrapper title="리뷰" moreHref="/review" className="pb-28">
      <Swiper slidesPerView={'auto'} className="w-100">            
        {reviews?.slice(0, 2).map(review => (
            <SwiperSlide className={"flex flex-1 basis-[70%] mr-[2.6%] shadow-[0_2px_20px_0_rgba(189,216,204,0.5)] last:sm:mr-[12%]"}>
              <ReviewCard key={review.id} review={review}/>
            </SwiperSlide>
        ))}            
      </Swiper>
    </WithTitleWrapper>
  );
};

export default ReviewList;
