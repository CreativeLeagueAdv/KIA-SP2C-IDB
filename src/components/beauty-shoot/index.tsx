/* eslint-disable @next/next/no-img-element */
import styles from "../color-variants/styles/styles.module.css";

export default function BeautyShoot() {
  return (
    <div id='mainColor' className={styles.colorsMainContainer}>
      <img
        alt='color'
        className={styles.mainImage}
        width={100}
        height={100}
        src={`/assets/beauty.webp`}
      />
    </div>
  );
}
