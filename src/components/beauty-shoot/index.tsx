import styles from "../color-variants/styles/styles.module.css";
import TextHeading from "../shared/text-heading";
import TextDescription from "../shared/text-description";
import FloatingTextSection from "../shared/floating-text";

export default function BeautyShoot({
  textHead1,
  textHead2,
  desc,
  image,
}: {
  textHead1:string
  textHead2:string
  desc?: boolean;
  image?: string;
}) {
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
        src={image ? image : `/assets/beauty.webp`}
      />
      <FloatingTextSection>
        <TextHeading firstLine={textHead1} secondLine={textHead2} />
        {desc ? (
          <TextDescription
            firstLine='The Seltos builds on a solid reputation of sharp, dynamic design, powerful aesthetics, and cutting edge technology.'
            secondLine=' Add in unprecedented levels of connectivity and new, distinctive design elements, and the Seltos sets a new benchmark in'
            thirdLine='small SUV design. Again'
          />
        ) : (
          ""
        )}
      </FloatingTextSection>
    </div>
  );
}
