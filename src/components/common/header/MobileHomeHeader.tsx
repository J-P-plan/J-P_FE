import BellIcon from "@/components/icons/BellIcon";
import Header from "./Header";
import Link from "next/link";
import React from "react";

const MobileHomeHeader = () => {
  return (
    <Header
      leftNode={
        <Link
          href="/home"
          className="block rounded-lg border border-gray-300 p-2 text-gray-300"
        >
          logo
        </Link>
      }
      rightNode={
        // [TODO] : 기획에 따라 알림페이지 이동 or 알림리스트 모달 띄우기
        <button className="flex items-center">
          <BellIcon />
        </button>
      }
    />
  );
};

export default MobileHomeHeader;
