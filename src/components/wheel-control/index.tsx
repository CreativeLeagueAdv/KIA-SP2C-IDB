import Slider from "@mui/material/Slider";
import { styled } from "@mui/styles";
import { useState } from "react";
import styles from "./styles/styles.module.css";
const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const marks = [
  {
    value: 0,
  },
  {
    value: 5,
  },
  {
    value: 10,
  },
  {
    value: 15,
  },
  {
    value: 20,
  },
  {
    value: 25,
  },
  {
    value: 30,
  },
  {
    value: 35,
  },
  {
    value: 40,
  },
  {
    value: 45,
  },
  {
    value: 50,
  },
  {
    value: 55,
  },
  {
    value: 60,
  },
  {
    value: 65,
  },
  {
    value: 70,
  },
  {
    value: 75,
  },
  {
    value: 80,
  },
  {
    value: 85,
  },
  {
    value: 90,
  },
  {
    value: 95,
  },
  {
    value: 100,
  },
];
const IOSSlider = styled(Slider)(({ theme: any }) => ({
  color: "#fff",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "black",
    border: "1px solid #fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    display: "none",
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#fff",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#fff",
    height: 1,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));
export default function WheelController() {
  const [image, setImage] = useState(1);
  function valuetext(value: any) {
    setImage(value / 5);
    return `${value}°C`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.controlContainer}>
        <p className={styles.textTop}>This is a wheel description area</p>
        <div className={styles.sliderDiv}>
          <p className={styles.leftPoint}></p>
          <IOSSlider
            style={{
              width: "250px",
            }}
            defaultValue={50}
            getAriaValueText={valuetext}
            onChange={(e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log("EEE", e);
            }}
            valueLabelDisplay='auto'
            step={5}
            marks={marks}
            min={5}
            max={100}
          />
          <p className={styles.rightPoint}></p>
        </div>
        <p className={styles.textBottom}>Drag to Rotate Wheels</p>
      </div>
      <img
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
        src={`/assets/wheel/${image}.png`}
      />
    </div>
  );
}