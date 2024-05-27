"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const headerVariants = cva(
  "fixed top-0 left-0 z-50 flex h-auto w-full items-center justify-between p-4 bg-white transition-transform duration-300",
  {
    variants: {
      isVisible: {
        true: "translate-y-0",
        false: "-translate-y-full",
      },
    },
  }
);

interface Props {
  className?: string;
  leftNode?: React.ReactNode;
  title?: string;
  rightNode?: React.ReactNode;
}

const Header = ({ className, leftNode, title, rightNode }: Props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={cn(headerVariants({ isVisible, className }))}>
      <div>{leftNode ?? leftNode}</div>
      {title && (
        <h1 className="flex-1 text-center text-xl font-bold text-[#1a1a1a]">
          {title}
        </h1>
      )}
      <div>{rightNode ?? rightNode}</div>
    </header>
  );
};

export default Header;
