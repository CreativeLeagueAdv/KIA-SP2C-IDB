import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import { useTranslation } from "react-i18next";
import {VideoPlayer} from "./VideoJs";
export default function PromoVideo() {
  const { t, i18n } = useTranslation("common");
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
  }
  useEffect(() => {
    window?.document
      ?.getElementById("myVideo")
      ?.addEventListener("ended", handleVideoEnd, false);
  }, [router.isReady]);
  return (
    <div id='promo' className="videoContainer">
      <div style={{ position: "relative" }} className={styles.videoClass}>
        {showBanner && (
          <div className={styles.promoContainer}>
            <Typography className={styles.text}>{t("newSeltos")}</Typography>
            <img
              className={styles.mouse}
              src='assets/mouseIcon.svg'
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push("#shoot");
              }}
            />
          </div>
        )}
        <VideoPlayer src={source?.src} />
      
      </div>
    </div>
  );
}
