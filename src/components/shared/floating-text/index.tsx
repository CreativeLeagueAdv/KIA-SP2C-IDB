import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function FloatingTextSection({ children }: { children: ReactNode }) {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
      pt='5%'
      pb={"5%"}
      width={"100vw"}
      style={{ position: "absolute", left: "0", top: "0" }}>
      {children}
    </Stack>
  );
}
