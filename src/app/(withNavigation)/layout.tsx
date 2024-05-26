import MobileNavigation from "@/components/common/navigation/MobileNavigation";
import React from "react";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <MobileNavigation />
    </>
  );
}
