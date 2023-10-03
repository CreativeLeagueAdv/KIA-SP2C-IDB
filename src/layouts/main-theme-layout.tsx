import { Component, JSXElementConstructor, ReactNode, useEffect } from "react";
import MainAppBar from "../components/layout/AppBar";
import { useTranslation } from "react-i18next";

export default function Layout({ children }: { children: ReactNode }) {
  const colors = [
    "twoToneRed",
    "twoToneSilverBlack",
    "twoToneGrayBlack",
    "twoToneGrayWhite",
    "twoToneWhiteBlack",
    "oneToneRed",
    "oneToneSilver",
    "oneToneSnowWhite",
    "oneToneOlive",
    "oneToneBlue",
    "oneToneGray",
    "oneToneWhite",
    "oneToneBlack",
  ];
  
  const { t, i18n } = useTranslation("common");
  return (
    <>
      {colors.map((item) => (
        <link rel='prefetch' as='image' href={`assets/colors/${item}.webp`} />
      ))}
      <link href='assets/lights/tinyfrontlightOff.webp' />
      <link href='assets/lights/tinyfrontlightOn.webp' />
      <link href='assets/lights/tinyrearlightOff.webp' />
      <link href='assets/lights/tinyrearlightOn.webp' />

      <div
        id='layout'
        style={{
          background: "#05141f",
          width: "100vw",
          direction: i18n?.language == "en" ? "ltr" : "rtl",
        }}>
        <MainAppBar />
        {children}
      </div>
    </>
  );
}
