/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";

export default function ColorVariants() {
  const [selectedColorImage, setSelectedColorImage] = useState("Black");
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const colors = ["Blue", "White", "Green", "Silver", "Black"];

  return (
    <>
      <div id='mainColor' className={styles.colorsMainContainer}>
        <img
          alt='color'
          className={styles.mainImage}
          width={100}
          height={100}
          src={`/assets/cars/${selectedColorImage}.webp`}
        />
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
