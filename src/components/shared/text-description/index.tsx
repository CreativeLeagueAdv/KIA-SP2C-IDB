import { Stack, Typography } from "@mui/material";
import styles from "../text-heading/styles.module.css";
export default function TextDescription({
  firstLine,
  secondLine,
  thirdLine,
  padding,
  text,
}: {
  firstLine?: string;
  secondLine?: string;
  thirdLine?: string;
  text?: string;
  padding?: number;
}) {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      className={styles.responsive}
      sx={{ paddingBottom: padding && `${padding}px` }}
      width={"100%"}>
      {text ? (
        <Typography
          fontSize={{
            md: "1.5rem",
            lg: "1.5rem",
            xl: "1.5rem",
            xs: "12px",
            sm: "12px",
          }}
          fontWeight={"400"}
          color={"white"}
          sx={{
            marginInline: {
              md: "50px",
              lg: "120px",
              xl: "120px",
              xs: "30px",
              sm: "30px",
            },
          }}>
          {text}
        </Typography>
      ) : (
        <>
          <Typography
            fontSize={{
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
              xs: "12px",
              sm: "12px",
            }}
            fontWeight={"400"}
            color={"white"}>
            {firstLine}
          </Typography>
          <Typography
            fontSize={{
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
              xs: "12px",
              sm: "12px",
            }}
            fontWeight={"400"}
            color={"white"}>
            {secondLine}
          </Typography>
          <Typography
            fontSize={{
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
              xs: "12px",
              sm: "12px",
            }}
            fontWeight={"400"}
            lineHeight={1}
            color={"white"}>
            {thirdLine}
          </Typography>
        </>
      )}
    </Stack>
  );
}
