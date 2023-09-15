import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import styles from "./styles.module.css";
export default function FloatingTextSection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      className={styles.floating}>
      {children}
    </Stack>
  );
}
