import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PromoVideo() {
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();
  function handleVideoEnd() {
   setShowBanner(true)
  }
  useEffect(() => {
    window?.document
      ?.getElementById("myVideo")
      ?.addEventListener("ended", handleVideoEnd, false);
  }, [router.isReady]);
  return (
    <div id='promo'>
      <div style={{ position: "relative" }}>
        {showBanner && (
          <div
            style={{
              position: "absolute",
              left: "0",
              width: "100vw",
              height: "90vh",
            }}>
            <Typography
              variant='h2'
              sx={{
                marginInlineStart: "50px",
                marginTop: "70px",
                position: "absolute",
                width: "500px",
                textTransform: "uppercase",
                fontWeight: "500",
                fontSize: "53px",
              }}>
              {" "}
              The All-New SELTOS
            </Typography>
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
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          id='myVideo'
          width='100%'
          height='90vh'
          autoPlay
          muted>
          <source src={"/assets/SportageIntro-Film.webm"} type='video/webm' />
        </video>
      </div>
    </div>
  );
}
