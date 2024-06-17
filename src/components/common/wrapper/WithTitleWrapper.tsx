import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  title: string;
  moreHref: string;
  children: React.ReactNode;
  className?: string;
  useSideButton?: boolean; 
  sideButtonTitle?: string;
}

const WithTitleWrapper = ({ title, moreHref, children, className, useSideButton, sideButtonTitle }: Props) => {
  return (   
    <section className={cn("flex flex-col gap-3 overflow-x-auto", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg-bold capitalize text-text-darkest">{title}</h2>
          {useSideButton && <Link className="text-[12px] ml-2.5" href="/">{sideButtonTitle ?? '보기'}</Link>}
        </div>
        <Link href={moreHref} className="text-xs text-text-lighter">
          더보기
        </Link>
      </div>
      {children}
    </section>
  );
};

export default WithTitleWrapper;
