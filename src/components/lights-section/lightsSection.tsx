/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../color-variants/styles/styles.module.css";
import controlStyles from "./styles/styles.module.css";
import { Button, FormControlLabel } from "@mui/material";
import { SwitchButton } from "./styles";
import HeadingWithSelect from "../color-variants/headingWithSelections";
import { useTranslation } from "react-i18next";

export default function LightsSection({
  type,
  initial,
}: {
  type: "rims" | "lights";
  initial: "Off" | "On";
}) {
  const { t } = useTranslation("common");

  const [state, setState] = useState<"Off" | "On">("Off");
  const [selectedView, setSelectedView] = useState<"front" | "rear">("front");
  return (
    <>
      <div id='mainColor' className={styles.colorsMainContainer}>
        <img
          alt='color'
          className={styles.mainLightsImage}
          width={100}
          height={100}
          src={`assets/lights/tiny${selectedView}light${state ?? "Off"}.webp`}
        />
        <HeadingWithSelect
          headingText={t("lightsHead")}
          selectedView={selectedView}
          setSelectedView={(val) => {
            setSelectedView(val);
            setState("Off");
          }}
          views={["front", "rear"]}
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
              {t("off")}
            </Button>
            <FormControlLabel
              sx={{ margin: "0px !important" }}
              control={
                <SwitchButton
                  sx={{ margin: "0px !important" }}
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
              {t("on")}
            </Button>
          </div>
          <p className={styles.lightsTurn}>{t("turnLight")}</p>
        </div>
      </div>
    </>
  );
}
