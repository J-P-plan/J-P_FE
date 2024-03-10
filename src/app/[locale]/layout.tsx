import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import React from "react";
import { cn } from "../../lib/utils";
import { dir } from "i18next";
import i18nConfig from "../../../i18nConfig";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={cn("min-h-screen", notoSans.className)}>{children}</body>
    </html>
  );
}