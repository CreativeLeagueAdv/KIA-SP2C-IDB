/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "../color-variants/styles/styles.module.css";
import { Button, FormControlLabel, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SwitchButton } from "./styles";

export default function LightsSection({
  type,
  initial,
}: {
  type: "Tail" | "Head";
  initial: "Off"|'On';
}) {
  const [state, setState] = useState<"Off" | "On">('Off');
  const images = [
    "/assets/TaillightOn.webp",
    "/assets/TaillightOff.webp",
    "/assets/HeadlightOff.webp",
    "/assets/HeadlightOn.webp",
  ];



  return (
    <>
      <div
        id='mainColor'
        className={styles.colorsMainContainer}
        style={{ height: "95vh" }}>
        <img
          alt='color'
          className={styles.mainImage}
          width={100}
                  height={100}
                  style={{transition: 'width 2s'}}
          src={`/assets/${type}light${state??'Off'}.webp`}
        />
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "9%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}>
          <Typography
            style={{
              fontSize: "42px",
              fontWeight: "600",
              lineHeight: "25px",
            }}>
            FULL LED HEADLIGHTS
          </Typography>
          <Typography
            style={{ fontSize: "22px", fontWeight: "300", lineHeight: "25px" }}>
            LED Taillights for Distinctive Look
          </Typography>
          <div
            style={{
              border: "1px solid #fff",
              padding: "16px",
              display: "flex",
              gap: "10px",
            }}>
            <Button
              variant='text'
              sx={{ color: "#fff", fontSize: "22px" }}
              onClick={() => {
                setState("On");
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
              sx={{ color: "#fff", fontSize: "22px" }}
              variant='text'
              onClick={() => {
                setState("Off");
              }}>
              ON
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
