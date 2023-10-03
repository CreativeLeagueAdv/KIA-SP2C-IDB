import { Component, JSXElementConstructor, ReactNode, useEffect } from "react";
import MainAppBar from "../components/layout/AppBar";
import { useTranslation } from "react-i18next";

export default function Layout({ children }: { children: ReactNode }) {
  const colors = ["Blue", "White", "Green", "Silver", "Black"];
  const { t, i18n } = useTranslation("common");
  return (
    <>
   
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
