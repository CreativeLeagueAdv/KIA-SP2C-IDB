/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import FloatingTextSection from "../shared/floating-text";
import TextHeading from "../shared/text-heading";
import { Stack, Typography } from "@mui/material";
import HeadingWithSelect from "./headingWithSelections";

export default function ColorVariants() {
  const [selectedColorImage, setSelectedColorImage] = useState("Black");
  const colors = ["Blue", "White", "Green", "Silver", "Black"];
  const [selectedView, setSelectedView] = useState<"oneTone" | "TwoTone">(
    "oneTone"
  );
  return (
    <>
      <div id='colors' className={styles.colorsMainContainer}>
        <img
          alt='color'
          className={styles.mainImage}
          width={100}
          height={100}
          src={`assets/cars/${selectedColorImage}.webp`}
        />
        <HeadingWithSelect
          headingText='Exterior Colors'
          selectedView={selectedView}
          setSelectedView={setSelectedView}
          views={["oneTone", "TwoTone"]}
        />
        <div className={styles.colorBalls}>
          <Typography
            fontSize={{ xs: "16px", sm: "16px", lg: "28px", xl: "28px" }}
            fontWeight={400}
            mb='10px'
            sx={{ color: "#fff" }}>
            Color Name
          </Typography>
          <div className={styles.colorBallContainer}>
            {colors.map((color, index) => (
              // eslint-disable--line @next/next/no-img-element
              <div
                className={
                  selectedColorImage == color ? styles.colorBallSelected : ""
                }>
                <img
                  width={"100px"}
                  id='ballImage'
                  height={"100px"}
                  alt='colorBall'
                  className={styles.colorBall}
                  key={`color-ball-${index}`}
                  src={`assets/color-balls/${color}.png`}
                  onClick={() => {
                    setSelectedColorImage(color);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
