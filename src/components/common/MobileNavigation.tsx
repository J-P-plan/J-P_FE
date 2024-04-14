"use client";

import CalendarIcon from "../icons/CalendarIcon";
import HomeIcon from "../icons/HomeIcon";
import Link from "next/link";
import MessageIcon from "../icons/MessageIcon";
import ProfileIcon from "../icons/ProfileIcon";
import React from "react";
import SearchIcon from "../icons/SearchIcon";
import { usePathname } from "next/navigation";

// 임시 경로(논의 필요)
const Menus = [
  { name: "홈", icon: HomeIcon, href: "/home" },
  { name: "검색", icon: SearchIcon, href: "/search" },
  { name: "일정", icon: CalendarIcon, href: "/plan" },
  { name: "리뷰", icon: MessageIcon, href: "/review" },
  { name: "마이페이지", icon: ProfileIcon, href: "/mypage" },
];

const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-2 px-4 mx-auto bg-white fixed bottom-0">
      <ul className="flex justify-between">
        {Menus.map(menu => (
          <li className="min-w-12" key={menu.name}>
            <Link
              href={menu.href}
              className="flex flex-col justify-center items-center text-center"
            >
              <span>
                <menu.icon
                  stroke={pathname === menu.href ? "#FFC814" : "#4D4D4D"}
                  strokeWidth="2"
                />
              </span>
              <p
                className={`text-center text-[10px] leading-5 ${
                  pathname === menu.href
                    ? "text-[#FFC814] font-bold"
                    : "text-[#4D4D4D] font-bold"
                } `}
              >
                {menu.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
