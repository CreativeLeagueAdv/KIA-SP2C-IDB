/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import { Typography } from "@mui/material";
import HeadingWithSelect from "./headingWithSelections";
import { useTranslation } from "react-i18next";

export default function ColorVariants() {
  const [selectedView, setSelectedView] = useState<"oneTone" | "twoTone">(
    "oneTone"
  );
  const [selectedColorImage, setSelectedColorImage] = useState("oneToneBlue");

  const { t } = useTranslation("common");

  const colorsObject = {
    oneTone: [
      "oneToneRed",
      "oneToneSilver",
      "oneToneSnowWhite",
      "oneToneOlive",
      "oneToneBlue",
      "oneToneGray",
      "oneToneWhite",
      "oneToneBlack",
    ],
    twoTone: [
      "twoToneRed",
      "twoToneSilverBlack",
      "twoToneGrayBlack",
      "twoToneGrayWhite",
      "twoToneWhiteBlack",
    ],
  };
  useEffect(() => {
    setSelectedColorImage(
      colorsObject?.[selectedView]?.[
        Math.floor(colorsObject?.[selectedView]?.length / 2)
      ]
    );
  }, [selectedView]);
  return (
    <>
      <div id='Exteriors' className={styles.colorsMainContainer}>
        <img
          alt='color'
          className={styles.mainImage}
          width={100}
          height={100}
          key={selectedColorImage}
          src={`assets/colors/${selectedColorImage}.webp`}
        />
        <HeadingWithSelect
          headingText={t("colorVariants")}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
          views={["oneTone", "twoTone"]}
        />
        <div className={styles.colorBalls}>
          <Typography
            className={styles.selectedText}
            fontSize={{ xs: "10px", sm: "10px", lg: "28px", xl: "28px" }}
            fontWeight={400}
            mb='10px'
            
            sx={{ color: "#fff" ,fontSize:'26px !important'}}>
            {t(selectedColorImage)}
          </Typography>
          <div className={styles.colorBallContainer}>
            {colorsObject?.[selectedView]?.map((color, index) => (
              // eslint-disable--line @next/next/no-img-element
              <div
                className={
                  selectedColorImage == color ? styles.colorBallSelected : ""
                }>
                <img
                  width={"70px"}
                  id='ballImage'
                  height={"70px"}
                  alt='colorBall'
                  className={styles.colorBall}
                  key={`color-ball-${index}`}
                  src={`assets/colors/balls/${color}.png`}
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
