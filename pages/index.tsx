import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../src/layouts/main-theme-layout";
import PromoVideo from "../src/components/promo-video";
import ColorVariants from "../src/components/color-variants";
import { Box } from "@mui/material";

export default function Home() {

  return (
    <>
      <Layout>
        <Box sx={{width:'100%'}} >
          <PromoVideo key={"promoVideo"} />
          <ColorVariants />
        </Box>
      </Layout>
    </>
  );
}
