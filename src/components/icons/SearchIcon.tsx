import React from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const SearchIcon = ({
  className,
  fill = "none",
  stroke = "#1A1A1A",
}: Props) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9269 17.04L20.4 20.4M19.28 11.44C19.28 15.7699 15.7699 19.28 11.44 19.28C7.11009 19.28 3.60001 15.7699 3.60001 11.44C3.60001 7.11006 7.11009 3.59998 11.44 3.59998C15.7699 3.59998 19.28 7.11006 19.28 11.44Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
