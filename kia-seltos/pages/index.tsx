import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../src/layouts/main-theme-layout";

export default function Home() {
  const router = useRouter();
  function handleVideoEnd() {
    console.log("ENDED");
  }
  useEffect(() => {
    window?.document
      ?.getElementById("myVideo")
      ?.addEventListener("ended", handleVideoEnd, false);
  }, [router.isReady]);
  return (
    <>
      <Layout>
     
      </Layout>
    </>
  );
}
