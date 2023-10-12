import { useEffect, useState } from "react";
import videoStyles from "../promo-video/styles/styles.module.css";
import styles from "./styles/styles.module.css";
import { useRouter } from "next/router";

type source = {
  type: string;
  src: string;
};
export default function SectionItem({
  src,
  headLine,
  description,
  isImage,
}: {
  src: string | source;
  headLine: string;
  description: string;
  isImage: boolean;
}) {
  const { isReady } = useRouter();
  const [source, setSource] = useState({
    type: "webm",
  });
  useEffect(() => {
    if (isReady) {
      if (window && window.innerWidth <= 768) {
        setSource({
          type: "mp4",
        });
      }
    }
  }, [isReady]);
  return (
    <div
      style={{
        backgroundImage: isImage ? `url(${src})` : "",
      }}
      className={styles.container}>
      {!isImage ? (
        <video
          className={videoStyles.videoClass}
          loop
          style={{ position: "absolute", top: "0", left: "0" }}
          id='myVideo'
          width='100%'
          height='100vh'
          autoPlay
          muted>
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
