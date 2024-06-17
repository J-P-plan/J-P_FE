"use client";
import React from "react";
import LocationIcon from "@/components/icons/LocationIcon";
import { Tag } from "@/components/ui/Tag";
import BannersWrapper from "./BannersWrapper";


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

const ContentsWrapper = async () => {
  return (
    <>
      <BannersWrapper banners={detailDumy.photoUrls}/>
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
      </div>
    </>
  )
}

export default ContentsWrapper;

