import styles from "../color-variants/styles/styles.module.css";
import TextHeading from "../shared/text-heading";
import TextDescription from "../shared/text-description";
import FloatingTextSection from "../shared/floating-text";
import { useTranslation } from "react-i18next";

export default function BeautyShoot({
  textHead1,
  textHead2,
  desc,
  image,
}: {
  textHead1: string;
  textHead2: string;
  desc?: boolean;
  image?: string;
}) {
  const { t } = useTranslation("common");
  return (
    <div
      id={image ? "shoot2" : "shoot"}
      className={styles.colorsMainContainer}
      style={{ position: "relative" }}>
      <img
        alt='color'
        className={styles.mainImage}
        width={100}
        height={100}
        src={image ? image : `assets/beauty1.webp`}
      />
      <FloatingTextSection>
        <TextHeading
          padding={60}
          firstLine={t(textHead1)}
          secondLine={t(textHead2)}
        />
        {desc ? <TextDescription padding={60} text={t("beauty1Desc")} /> : ""}
      </FloatingTextSection>
    </div>
  );
}
