import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const WithTitleWrapper = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col overflow-x-auto gap-3">
      <p className="text-[#1a1a1a] text-xl font-bold leading-[normal] capitalize">
        {title}
      </p>
      {children}
    </div>
  );
};

export default WithTitleWrapper;
