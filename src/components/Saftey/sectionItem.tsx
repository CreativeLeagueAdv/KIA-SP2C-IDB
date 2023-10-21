import videoStyles from "../promo-video/styles/styles.module.css";
import styles from "./styles/styles.module.css";

type source = {
  type: string;
  src: string;
};
export default function SectionItem({
  src,
  headLine,
  description,
  isImage,
  index,
}: {
  src: string | source;
  headLine: string;
  description: string;
  isImage: boolean;
  index: Number
}) {
  return (
    <div
      style={{
        backgroundImage: isImage ? `url(${src})` : "",
        backgroundPosition:index==2?'center':index==3?'right':'unset'
      }}
      className={styles.container}>
      {!isImage ? (
        <video
          className={
            isImage
              ? videoStyles.videoClass
              : videoStyles?.mobileHeightVideoClass
          }
          loop
          style={{ position: "absolute", top: "0", left: "0" }}
          width='100%'
          height='100vh'
          autoPlay={true}
          muted
          playsInline>
          <source
            src={(src as source)?.src}
            type={`video/${(src as source)?.type}`}
          />
        </video>
      ) : (
        ""
      )}
      <div className={styles.subContainer}>
        <p className={styles.headText}>{headLine}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
