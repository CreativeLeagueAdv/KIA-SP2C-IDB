import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp";
import { useEffect, useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window?.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };
  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          position: "fixed",
          bottom: "24px",
          borderRadius: "25%",
          border: "none",
          insetInlineEnd: "24px",
          zIndex: "1000",
          display: isVisible ? "inline-flex" : "none",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={scrollToTop}>
        <ArrowCircleUpSharpIcon
          style={{
            color: "white",
            width: "50px",
            height: "50px",
            background: "#05141f",
            borderRadius: "50%",
          }}
        />
      </button>
      <Component {...pageProps} />
    </div>
  );
}
export default appWithTranslation(App);
