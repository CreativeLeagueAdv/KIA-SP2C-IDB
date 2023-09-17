/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../color-variants/styles/styles.module.css";
import controlStyles from "./styles/styles.module.css";
import { Button, FormControlLabel, Typography } from "@mui/material";
import { SwitchButton } from "./styles";

export default function LightsSection({
  type,
  initial,
}: {
  type: "Tail" | "Head";
  initial: "Off" | "On";
}) {
  const [state, setState] = useState<"Off" | "On">("Off");

  return (
    <>
      <div id='mainColor' className={styles.colorsMainContainer}>
        <img
          alt='color'
          className={styles.mainImage}
          width={100}
          height={100}
          style={{ transition: "width 2s" }}
          src={`/assets/${type}light${state ?? "Off"}.webp`}
        />
        <div className={controlStyles.textHeadContainer}>
          <Typography className={controlStyles.textHead}>
            FULL LED HEADLIGHTS
          </Typography>
          <Typography className={controlStyles.textDescription}>
            LED Taillights for Distinctive Look
          </Typography>
          <div className={controlStyles.controlButtons}>
            <Button
              variant='text'
              className={controlStyles.controlText}
              onClick={() => {
                setState("Off");
              }}>
              OFF
            </Button>
            <FormControlLabel
              control={
                <SwitchButton
                  sx={{ m: 1 }}
                  checked={state == "On" ? true : false}
                  onClick={() => {
                    setState(state == "Off" ? "On" : "Off");
                  }}
                />
              }
              label=''
            />
            <Button
              className={controlStyles.controlText}
              variant='text'
              onClick={() => {
                setState("On");
              }}>
              ON
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
