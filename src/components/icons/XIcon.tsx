import React from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const XIcon = ({ className, fill = "none", stroke = "#4D4D4D" }: Props) => {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33333 4.66667L4.66667 9.33334M9.33333 9.33334L4.66667 4.66667" stroke={stroke} strokeLinecap="round"/>
    </svg>
  );
};

export default XIcon;
