import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import { useTranslation } from "react-i18next";
export default function PromoVideo() {
    const { t, i18n } = useTranslation("common");

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
    <div id='promo'>
      <div style={{ position: "relative" }} className={styles.videoClass}>
        {showBanner && (
          <div className={styles.promoContainer}>
            <Typography className={styles.text}>{t("newSeltos")}</Typography>
            <img
              src='assets/mouseIcon.svg'
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push("#shoot");
              }}
            />
          </div>
        )}
        <video
          className={styles.videoClass}
          id='myVideo'
          width='100%'
          height='90vh'
          muted={true}
          autoPlay={true}
          controls={true}
          controlsList={
            "nofullscreen nodownload noremoteplayback noplaybackrate foobar"
          }
          playsInline={true}
          // playsinline='true'
          loop={false}>
          <source src={"assets/SportageIntro-Film.webm"} type='video/webm' />
        </video>
      </div>
    </div>
  );
}
