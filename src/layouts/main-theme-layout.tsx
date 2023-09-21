import { Component, JSXElementConstructor, ReactNode, useEffect } from "react";
import MainAppBar from "../components/layout/AppBar";
import { useTranslation } from "react-i18next";

export default function Layout({ children }: { children: ReactNode }) {
  const colors = ["Blue", "White", "Green", "Silver", "Black"];
  const { t, i18n } = useTranslation("common");
  return (
    <>
      <link rel='prefetch' as='image' href='/assets/TaillightOn.webp' />
      <link rel='prefetch' as='image' href='/assets/TaillightOff.webp' />
      <link rel='prefetch' as='image' href='/assets/HeadlightOff.webp' />
      <link rel='prefetch' as='image' href='/assets/HeadlightOn.webp' />
      <link rel='preload' as='video' href='/assets/SportageIntro-Film.webm' />
      {colors.map((item) => (
        <link rel='prefetch' as='image' href='/assets/cars/${item}.webp' />
      ))}
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
