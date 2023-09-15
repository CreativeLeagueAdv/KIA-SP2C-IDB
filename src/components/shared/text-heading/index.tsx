import { Stack, Typography } from "@mui/material";
import styles from './styles.module.css'
export default function TextHeading({
  firstLine,
  secondLine,
  secondLineSize='large',
}: {
  firstLine: string;
  secondLine: string;
  secondLineSize?:'small'|'large'
}) {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}>
      <Typography
        className={styles.heading}>
        {firstLine}
      </Typography>
      <Typography
        sx={{ textShadow: "0px 0px 20px rgba(0, 0, 0, 0.64)" }}
        fontSize={secondLineSize == "small" ? "2rem" : "59px"}
        fontWeight={secondLineSize == "small" ? "400" : "600"}
        lineHeight={secondLineSize == "small" ? "1.6" : "1"}
        className={styles.secondLine}
        color={"white"}>
        {secondLine}
      </Typography>
    </Stack>
  );
}
