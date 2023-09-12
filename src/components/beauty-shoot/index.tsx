/* eslint-disable @next/next/no-img-element */
import { Stack } from "@mui/material";
import styles from "../color-variants/styles/styles.module.css";
import TextHeading from "../shared/text-heading";
import TextDescription from "../shared/text-description";
import FloatingTextSection from "../shared/floating-text";

export default function BeautyShoot() {
  return (
    <div
      id='shoot'
      className={styles.colorsMainContainer}
      style={{ position: "relative" }}>
      <img
        alt='color'
        className={styles.mainImage}
        width={100}
        height={100}
        src={`/assets/beauty.webp`}
      />
      <FloatingTextSection>
        <TextHeading
          firstLine='Bold and Sleek'
          secondLine='The Ultimate Urban SUV.'
        />
        <TextDescription
          firstLine='The all-new Kia Sportage. Bold and contemporary design. Built with the latest innovation.'
          secondLine='So you feel more confident when you’re on the move. No matter where life takes you. For those who keep moving.'
          thirdLine='For those who keep seeking. Inspiration is never out of reach.'
        />
      </FloatingTextSection>
    </div>
  );
}
