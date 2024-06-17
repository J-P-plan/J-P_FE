"use client";
import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  banners: string[],
}

const BannersWrapper = async ({ banners }: Props) => {

  return (
    <Swiper
    modules={[Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ type: 'fraction' }}
    >
    {banners?.map((url,idx)=>{
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
  )
}

export default BannersWrapper;