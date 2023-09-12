/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import FloatingTextSection from "../shared/floating-text";
import TextHeading from "../shared/text-heading";

export default function ColorVariants() {
  const [selectedColorImage, setSelectedColorImage] = useState("Black");
  const colors = ["Blue", "White", "Green", "Silver", "Black"];

  return (
    <>
      <div id='colors' className={styles.colorsMainContainer}>
        <img
          alt='color'
          className={styles.mainImage}
          width={100}
          height={100}
          src={`/assets/cars/${selectedColorImage}.webp`}
        />
        <FloatingTextSection>
          <TextHeading
            firstLine='COLOR VARIANTS'
            secondLine={selectedColorImage}
            secondLineSize='small'
          />
        </FloatingTextSection>
        <div className={styles.colorBallContainer}>
          {colors.map((color, index) => (
            // eslint-disable-next-line @next/next/no-img-element
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
                src={`/assets/color-balls/${color}.png`}
                onClick={() => {
                  setSelectedColorImage(color);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
