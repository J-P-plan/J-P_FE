"use client";

import React, { useState } from "react";

import { InputWithIcon } from "@/components/ui/InputWithIcon";
import { SearchIcon } from "lucide-react";

const SearchPlace = () => {
  // query를 받아와 router push로 검색 결과 페이지로 이동
  const [query, setQuery] = useState("");

  return (
    <InputWithIcon
      Icon={<SearchIcon />}
      className="shadow-input py-2 rounded-full border border-[#e6e6e6] bg-white"
      onChange={e => setQuery(e.target.value)}
      placeholder="여행지를 입력해주세요."
      value={query}
    />
  );
};

export default SearchPlace;
