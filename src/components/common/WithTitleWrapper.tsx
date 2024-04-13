import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  moreHref: string;
  children: React.ReactNode;
}

const WithTitleWrapper = ({ title, moreHref, children }: Props) => {
  return (
    <section className="flex flex-col overflow-x-auto gap-3">
      <div className="flex justify-between items-center">
        <h2 className="text-[#1a1a1a] text-xl font-bold leading-[normal] capitalize">
          {title}
        </h2>
        <Link href={moreHref} className="text-[#b8b8b8] text-xs">
          더보기
        </Link>
      </div>
      {children}
    </section>
  );
};

export default WithTitleWrapper;
