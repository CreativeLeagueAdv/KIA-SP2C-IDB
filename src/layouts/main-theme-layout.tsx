import { Component, JSXElementConstructor, ReactNode, useEffect } from "react";
import MainAppBar from "../components/layout/AppBar";

export default function Layout({ children }: { children: ReactNode }) {
  const colors = ["Blue", "White", "Green", "Silver", "Black"];

  return (
    <div id='layout' style={{ background: "black" }}>
      {colors.map((item) => (
        <img
          style={{ visibility: "hidden" }}
          src={`/assets/car-colors/${item}-min.png`}
        />
      ))}
      <MainAppBar />
      {children}
    </div>
  );
}
