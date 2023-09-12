

import { Stack, Typography } from "@mui/material";

export default function TextDescription({
  firstLine,
  secondLine,
  thirdLine,
}: {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
}) {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}>
      <Typography
        sx={{ textShadow: "0px 0px 20px rgba(0, 0, 0, 0.64)" }}
        fontSize={"1rem"}
        fontWeight={"400"}
       
        color={"white"}>
        {firstLine}
      </Typography>
      <Typography
        sx={{ textShadow: "0px 0px 20px rgba(0, 0, 0, 0.64)" }}
        fontSize={"1rem"}
        fontWeight={"400"}
       
        color={"white"}>
        {secondLine}
      </Typography>
      <Typography
        sx={{ textShadow: "0px 0px 20px rgba(0, 0, 0, 0.64)" }}
        fontSize={"1rem"}
        fontWeight={"400"}
        lineHeight={1}
        color={"white"}>
        {thirdLine}
      </Typography>
    </Stack>
  );
}
