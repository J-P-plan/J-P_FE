"use client";

import React, { useState } from "react";

import { InputWithIcon } from "@/components/ui/InputWithIcon";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface Props {
  className?: string;
  placeholder: string;
}

const SearchBar = ({ className, placeholder }: Props) => {
  // query를 받아와 router push로 검색 결과 페이지로 이동
  const [query, setQuery] = useState("");

  return (
    <InputWithIcon
      Icon={<SearchIcon />}
      className={cn(
        "rounded-full border border-[#e6e6e6] bg-white py-2 shadow-input",
        className
      )}
      onChange={e => setQuery(e.target.value)}
      placeholder={placeholder}
      value={query}
    />
  );
};

export default SearchBar;
