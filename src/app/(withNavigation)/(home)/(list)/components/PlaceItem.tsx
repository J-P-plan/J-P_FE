import Link from "next/link";
import React from "react";

interface PlaceItemProps {
  useCityName: boolean; 
  useDiscription: boolean; 
  useTheme: boolean;
}

const PlaceItem = ({useCityName, useDiscription, useTheme} : PlaceItemProps) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <div className="p-3.5" style={{width: "164px"}}>
      <Link href="/">
        <div>
          {useCityName &&
            <div className="absolute block border rounded-3xl bg-gray-200 opacity-40 px-2">
               <span>props city</span>
            </div>
          }
            <img src={img} alt="place_image" className="block border border-grey-300 rounded-2xl" style={{height: "155px"}}/>
          {useTheme &&
              <div className="block border rounded-3xl bg-gray-200 opacity-40 px-2">
              <span>props theme</span>
            </div>
          }
        </div>
        {useDiscription && 
          <div>
            <p>props title</p>
            <p>props location</p>
          </div>
        }
      </Link>
    </div>
  );
};

export default PlaceItem;
