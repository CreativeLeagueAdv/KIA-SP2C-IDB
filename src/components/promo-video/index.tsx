import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import { useTranslation } from "react-i18next";
export default function PromoVideo() {
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
    const { t, i18n } = useTranslation("common");
  return (
    <div id='promo'>
      <div style={{ position: "relative" }}>
        {showBanner && (
          <div className={styles.promoContainer}>
            <Typography className={styles.text}> The All-New SELTOS</Typography>
            <img
              id='bannerImage'
              src='/assets/Kia-Temp.png'
              style={{
                width: "100vw",
                height: "90vh",
              }}
            />
          </div>
        )}
        <video
          className={styles.videoClass}
          id='myVideo'
          width='100%'
          height='90vh'
          controls={true}
          
          autoPlay
          muted>
          <source src={"/assets/SportageIntro-Film.webm"} type='video/webm' />
        </video>
       
      </div>
    </div>
  );
}
