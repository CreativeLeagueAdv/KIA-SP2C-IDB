/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import FloatingTextSection from "../shared/floating-text";
import TextHeading from "../shared/text-heading";
import { Stack, Typography } from "@mui/material";

export default function HeadingWithSelect({
  views,
  headingText,
  setSelectedView,
  selectedView,
}: {
  views: any;
  headingText: string;
  setSelectedView: Dispatch<SetStateAction<any>>;
  selectedView: any;
}) {
  return (
    <FloatingTextSection>
      <div>
        <Typography
          fontSize={{ xs: "16px", sm: "16px", lg: "36px", xl: "36px" }}
          fontWeight={"600"}
          sx={{ color: "#fff", textAlign: "center" }}>
          {headingText}
        </Typography>
        <Stack
          direction={"row-reverse"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"50px"}>
          <Typography
            fontSize={{ xs: "14px", sm: "14px", lg: "26px", xl: "26px" }}
            fontWeight={"600"}
            onClick={() => {
              setSelectedView(views[0]);
            }}
            sx={{
              color: "#fff",
              cursor: "pointer",
              textAlign: "center",
              opacity: selectedView == views[0] ? 1 : 0.68,
              textDecoration: selectedView == views[0] ? "underline" : "none",
            }}>
            {views[0]}
          </Typography>
          <Typography
            onClick={() => {
              setSelectedView(views[1]);
            }}
            fontSize={{ xs: "14px", sm: "14px", lg: "26px", xl: "26px" }}
            fontWeight={"600"}
            sx={{
              color: "#fff",
              cursor: "pointer",
              textAlign: "center",
              opacity: selectedView == views[1] ? 1 : 0.68,
              textDecoration: selectedView == views[1] ? "underline" : "none",
            }}>
            {views[1]}
          </Typography>
        </Stack>
      </div>
    </FloatingTextSection>
  );
}