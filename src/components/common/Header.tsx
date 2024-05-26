import React from "react";

interface Props {
  leftNode?: React.ReactNode;
  title?: string;
  rightNode?: React.ReactNode;
}

const Header = ({ leftNode, title, rightNode }: Props) => {
  return (
    <header className="flex h-auto items-center justify-between">
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
