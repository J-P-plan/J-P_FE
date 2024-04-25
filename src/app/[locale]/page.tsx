// import initTranslations from "@/lib/shared/i18n";
import React from "react";

// // import LanguageChanger from "../../components/test/LanguageChanger";

// type Params = {
//   params: {
//     locale: string;
//   };
// };

// const i18nNamespaces = ["home"];

export default function Home() {
  // const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <main className="flex flex-col items-center justify-center lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 space-y-16">
      {/* <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <Button icon={<TvIcon />} iconPlacement="left" variant="shine">
          Click me
        </Button>
      </div>
      <div>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <h1>{t("header")}</h1>
      <TranslationProvider
        locale={locale}
        resources={resources}
        namespaces={i18nNamespaces}
      >
        <ExampleClientComponent />
        <LanguageChanger />
      </TranslationProvider> */}
      메인
    </main>
  );
}
