import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  moreHref: string;
  children: React.ReactNode;
}

const WithTitleWrapper = ({ title, moreHref, children }: Props) => {
  return (
    <section className="flex flex-col gap-3 overflow-x-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-lg-bold capitalize text-text-darkest">{title}</h2>
        <Link href={moreHref} className="text-xs text-text-lighter">
          더보기
        </Link>
      </div>
      {children}
    </section>
  );
};

export default WithTitleWrapper;
