"use client";
import React from "react";
import RecommendList from "../../components/recommend/RecommendList";
import ReviewList from "../../components/Review/ReviewList";
import ContentsWrapper from "../../components/detailInfo/ContentsWrapper";

const page = () => {

  return (
    <>
      <ContentsWrapper />
      <RecommendList />
      <ReviewList/>
    </>
  )
};

export default page;