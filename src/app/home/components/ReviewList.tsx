import { IResponseReview } from "@/lib/types/travel";
import React from "react";
import ReviewCard from "@/components/ui/cards/ReviewCard";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

async function getReviews() {
  const response = await fetch(`${process.env.API_HOST}/review`);

  const reviews: IResponseReview = await response.json();

  return reviews;
}

const ReviewList = async () => {
  const reviews = await getReviews();

  return (
    <WithTitleWrapper title="지금뜨는 리뷰" moreHref="review">
      <div className="flex flex-col gap-2">
        {[...reviews.data].slice(0, 2).map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </WithTitleWrapper>
  );
};

export default ReviewList;
