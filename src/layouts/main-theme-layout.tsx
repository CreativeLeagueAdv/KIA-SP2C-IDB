import { Component, JSXElementConstructor, ReactNode, useEffect } from "react";
import MainAppBar from "../components/layout/AppBar";

export default function Layout({ children }: { children: ReactNode }) {
  const colors = ["Blue", "White", "Green", "Silver", "Black"];

  return (
    <div id='layout' style={{ background: "#000"}}>
      {colors.map((item) => (
        <img
          width={'0px'}
          height={'0px'}
          style={{ visibility: "hidden",position:'absolute',zIndex:'-100' }}
          src={`/assets/cars/${item}.webp`}
        />
      ))}
      <MainAppBar />
      {children}
    </div>
  );
}
