/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../color-variants/styles/styles.module.css";
import controlStyles from "./styles/styles.module.css";
import { Button, FormControlLabel, Typography } from "@mui/material";
import { SwitchButton } from "./styles";
import HeadingWithSelect from "../color-variants/headingWithSelections";

export default function LightsSection({
  type,
  initial,
}: {
  type: "rims" | "lights";
  initial: "Off" | "On";
}) {
  const [state, setState] = useState<"Off" | "On">("Off");
  const [selectedView, setSelectedView] = useState<"Tail" | "Head">("Head");
  return (
    <>
      <div id='mainColor' className={styles.colorsMainContainer}>
        <img
          alt='color'
          className={styles.mainLightsImage}
          width={100}
          height={100}
          src={`/assets/${selectedView}light${state ?? "Off"}.webp`}
        />
        <HeadingWithSelect
          headingText='Exterior Lighting'
          selectedView={selectedView}
          setSelectedView={(val) => {
            setSelectedView(val);
            setState("Off");
          }}
          views={["Tail", "Head"]}
        />
        <div className={controlStyles.textHeadContainer}>
          <div className={controlStyles.controlButtons}>
            <Button
              variant='text'
              sx={{
                opacity: state == "Off" ? 1 : 0.68,
                height: "40px",
                padding: "0",
              }}
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
              sx={{
                opacity: state == "On" ? 1 : 0.68,
                height: "40px",
                padding: "0",
              }}
              className={controlStyles.controlText}
              variant='text'
              onClick={() => {
                setState("On");
              }}>
              ON
            </Button>
          </div>
          <p style={{ fontSize: "18px", color: "#fff",marginTop:'0px',marginBottom:'0px' }}>Turn lights on/off</p>
        </div>
      </div>
    </>
  );
}
