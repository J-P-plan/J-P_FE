import React from "react";

interface Props {
  leftNode?: React.ReactNode;
  title?: string;
  rightNode?: React.ReactNode;
}

const Header = ({ leftNode, title, rightNode }: Props) => {
  return (
    <header className="flex items-center justify-between h-auto">
      <div>{leftNode ?? leftNode}</div>
      {title && (
        <h1 className="flex-1 text-[#1a1a1a] text-center text-xl font-bold">
          {title}
        </h1>
      )}
      <div>{rightNode ?? rightNode}</div>
    </header>
  );
};

export default Header;
