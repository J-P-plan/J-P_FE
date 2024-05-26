import React from "react";
import { ReviewAPI } from "@/lib/api/review";
import ReviewCard from "@/components/ui/cards/ReviewCard";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

const ReviewList = async () => {
  const { data: reviews } = await ReviewAPI.getReviews();

  return (
    <WithTitleWrapper title="지금뜨는 리뷰" moreHref="review">
      <div className="flex flex-col gap-2">
        {[...reviews].slice(0, 2).map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </WithTitleWrapper>
  );
};

export default ReviewList;
