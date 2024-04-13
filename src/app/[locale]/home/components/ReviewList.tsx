import React from "react";
import ReviewCard from "@/components/ui/cards/ReviewCard";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

const ReviewList = () => {
  return (
    <WithTitleWrapper title="지금뜨는 리뷰" moreHref="reviews">
      <div className="flex flex-col gap-2">
        <ReviewCard />
        <ReviewCard />
      </div>
    </WithTitleWrapper>
  );
};

export default ReviewList;
