import { Component, JSXElementConstructor, ReactNode } from "react";
import MainAppBar from "../components/layout/AppBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id='layout' style={{ background: "black" }}>
      <MainAppBar />
      {children}
    </div>
  );
}
