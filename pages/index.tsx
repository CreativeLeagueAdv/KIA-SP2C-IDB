import Layout from "../src/layouts/main-theme-layout";
import PromoVideo from "../src/components/promo-video";
import ColorVariants from "../src/components/color-variants";
import { Box } from "@mui/material";
import BeautyShoot from "../src/components/beauty-shoot";

export default function Home() {

  return (
    <>
      <Layout>
        <Box sx={{width:'100%'}} >
          <PromoVideo key={"promoVideo"} />
          <BeautyShoot/>
          <ColorVariants />
        </Box>
      </Layout>
    </>
  );
}
