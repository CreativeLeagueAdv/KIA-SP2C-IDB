/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import FloatingTextSection from "../shared/floating-text";
import TextHeading from "../shared/text-heading";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("common");

  return (
    <FloatingTextSection>
      <div className={styles.head}>
        <Typography
          fontSize={{
            xs: "16px !important",
            sm: "16px !important",
            lg: "36px !important",
            xl: "36px !important",
          }}
          className={styles.headingText}
          fontWeight={"600"}>
          {headingText}
        </Typography>
        <Stack
          direction={"row-reverse"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"50px"}>
          <Typography
            onClick={() => {
              setSelectedView(views[1]);
            }}
            className={styles.headingDescription}
            fontSize={{
              xs: "10px",
              sm: "10px",
              lg: "26px !important",
              xl: "26px !important",
            }}
            fontWeight={"600"}
            sx={{
              color: "#fff",
              cursor: "pointer",
              textAlign: "center",
              fontSize: "26px !important",
              opacity: selectedView == views[1] ? 1 : 0.68,
              textDecoration: selectedView == views[1] ? "underline" : "none",
            }}>
            {t(views[1])}
          </Typography>
          <Typography
            fontSize={{ xs: "10px", sm: "10px", lg: "26px", xl: "26px" }}
            fontWeight={"600"}
            onClick={() => {
              setSelectedView(views[0]);
            }}
            className={styles.headingDescription}
            sx={{
              color: "#fff",
              cursor: "pointer",
              textAlign: "center",
              fontSize: "26px !important",

              opacity: selectedView == views[0] ? 1 : 0.68,
              textDecoration: selectedView == views[0] ? "underline" : "none",
            }}>
            {t(views[0])}
          </Typography>
        </Stack>
      </div>
    </FloatingTextSection>
  );
}
