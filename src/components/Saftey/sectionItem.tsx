import videoStyles from "../promo-video/styles/styles.module.css";
import styles from "./styles/styles.module.css";
export default function SectionItem({
  src,
  headLine,
  description,
  isImage,
}: {
  src: string;
  headLine: string;
  description: string;
  isImage: boolean;
}) {
  return (
    <div
      style={{
        backgroundImage: isImage ? `url(${src})` : "",
      }}
      className={styles.container}>
      {!isImage ? (
        <video
          className={videoStyles.videoClass}
          loop={true}
          style={{ position: "absolute", top: "0", left: "0" }}
          id='myVideo'
          width='100%'
          height='100vh'
          autoPlay
          muted>
          <source src={src} type='video/webm' />
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
