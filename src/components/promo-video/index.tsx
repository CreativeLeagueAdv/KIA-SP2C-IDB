import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import { useTranslation } from "react-i18next";
import { ReactPlayer } from "./react-video";
export default function PromoVideo() {
  const { t } = useTranslation("common");
  const [controlHidden, setControlHidden] = useState(true);
  const { isReady } = useRouter();
  const [source, setSource] = useState({
    type: "webm",
    src: "assets/SportageIntro-Film.webm",
  });
  useEffect(() => {
    if (isReady) {
      if (window && window.innerWidth <= 768) {
        setSource({
          type: "mp4",
          src: "assets/SportageIntro-Film.mp4",
        });
      }
    }
  }, [isReady]);
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();
  function handleVideoEnd() {
    setShowBanner(true);
    setControlHidden(true);
  }
  useEffect(() => {
    window?.document
      ?.getElementById("myVideo")
      ?.addEventListener("ended", handleVideoEnd, false);
  }, [router.isReady]);
  return (
    <div
      id='promo'
      className='videoContainer'
      onMouseMove={() => {
        if (!showBanner) setControlHidden(false);
        setTimeout(() => {
          setControlHidden(true);
        }, 4000);
      }}>
      <div style={{ position: "relative" }} className={styles.videoClass}>
        {showBanner && (
          <div className={styles.promoContainer}>
            <div
            className={styles.textContainer}>
              <Typography className={styles.text}>{t("newSeltos")}</Typography>
              <Typography className={styles.subText}>{t("beauty2")}</Typography>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "1%",
              }}>
              <img
                className={styles.mouse}
                src='assets/mouseIcon.svg'
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("#shoot");
                }}
              />
            </div>
          </div>
        )}
        <ReactPlayer
          controlHidden={controlHidden}
          handleVideoEnd={handleVideoEnd}
          src={source?.src}
        />
      </div>
    </div>
  );
}
