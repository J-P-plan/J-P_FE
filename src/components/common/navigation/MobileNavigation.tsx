"use client";

import CalendarIcon from "@/components/icons/CalendarIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import Link from "next/link";
import MessageIcon from "@/components/icons/MessageIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import { usePathname } from "next/navigation";

// TODO: white list를 만들어 navigation highlight 처리

// 임시 경로(논의 필요)
const Menus = [
  { name: "홈", icon: HomeIcon, href: "/" },
  { name: "검색", icon: SearchIcon, href: "/search" },
  { name: "일정", icon: CalendarIcon, href: "/plan" },
  { name: "리뷰", icon: MessageIcon, href: "/review" },
  { name: "마이페이지", icon: ProfileIcon, href: "/mypage" },
];

const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 mx-auto w-full bg-white px-4 py-2">
      <ul className="flex justify-between">
        {Menus.map(menu => (
          <li className="min-w-12" key={menu.name}>
            <Link
              href={menu.href}
              className="flex flex-col items-center justify-center text-center"
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
                    ? "font-bold text-[#FFC814]"
                    : "font-bold text-[#4D4D4D]"
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
