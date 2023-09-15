import Layout from "../src/layouts/main-theme-layout";
import PromoVideo from "../src/components/promo-video";
import ColorVariants from "../src/components/color-variants";
import { Box } from "@mui/material";
import BeautyShoot from "../src/components/beauty-shoot";
import LightsSection from "../src/components/lights-section/slider";
import FullImagePreview from '../src/components/360-images'
import Footer from '../src/components/footer'
import AppView from "../src/components/360-images";
export default function Home() {

  return (
    <>
      <Layout>
        <PromoVideo key={"promoVideo"} />
        <BeautyShoot />
        <ColorVariants />
        <LightsSection />
        <AppView />
        <Footer />
      </Layout>
    </>
  );
}
