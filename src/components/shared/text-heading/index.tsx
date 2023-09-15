import { Stack, Typography } from "@mui/material";

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
        sx={{ textShadow: "0px 0px 20px rgba(0, 0, 0, 0.64)" }}
        fontSize={"59px"}
        fontWeight={"600"}
        lineHeight={1}
        color={"white"}>
        {firstLine}
      </Typography>
      <Typography
        sx={{ textShadow: "0px 0px 20px rgba(0, 0, 0, 0.64)" }}
        fontSize={secondLineSize == "small" ? "2rem" : "59px"}
        fontWeight={secondLineSize == "small" ? "400" : "600"}
        lineHeight={secondLineSize == "small" ? "1.6" : "1"}
        color={"white"}>
        {secondLine}
      </Typography>
    </Stack>
  );
}