import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import { useTranslation } from "react-i18next";
import VideoPlayer, { VideoJS } from "./VideoJs";
const videoJsOptions = {
  autoplay: true,
  controls: true,
  responsive: true,
  fluid: true,
  sources: [
    {
      src: "/assets/SportageIntro-Film.webm",
      type: "video/webm",
    },
  ],
};
export default function PromoVideo() {
  const playerRef = React.useRef(null);
  const handlePlayerReady = (player: any) => {
    playerRef.current = player;
    player.on("ended", function (event: any) {
      setShowBanner(true)
    });

    // You can handle player events here, for example:
  };
  
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();


  const { t, i18n } = useTranslation("common");
  return (
    <div id='promo'>
      <div style={{ position: "relative" }}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  );
}
