import { Component, JSXElementConstructor, ReactNode, useEffect } from "react";
import MainAppBar from "../components/layout/AppBar";
import { useTranslation } from "react-i18next";

export default function Layout({ children }: { children: ReactNode }) {
  const colors = ["Blue", "White", "Green", "Silver", "Black"];
  const { t, i18n } = useTranslation("common");
  return (
    <>
      {colors.map((item) => (
        <link rel='prefetch' as='image' href='assets/cars/${item}.webp' />
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
