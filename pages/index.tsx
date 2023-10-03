import Layout from "../src/layouts/main-theme-layout";
import PromoVideo from "../src/components/promo-video";
import ColorVariants from "../src/components/color-variants";
import BeautyShoot from "../src/components/beauty-shoot";
import Footer from "../src/components/footer";
import SpecsSection from "../src/components/specifications";
import AppView from "../src/components/360-images";
import LightsSlider from "../src/components/lights-section";
import Technology from "../src/components/technology";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Safety from "../src/components/Saftey";
function Home() {
  return (
    <>
      <Layout>
        <PromoVideo key={"promoVideo"} />
        <BeautyShoot textHead1='beauty1Head' textHead2='' desc={true} />
        <ColorVariants />
        <LightsSlider />
        <AppView />
        <Technology isInterior={true} />

        <Safety />
        <Technology />
        <SpecsSection />
        <BeautyShoot
          desc={false}
          image={"assets/beauty2.webp"}
          textHead1={"beauty2"}
          textHead2={""}
        />
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
export async function getServerSideProps(context: any) {
  const language = context?.req?.cookies?.language;

  return {
    props: {
      ...(await serverSideTranslations(language ?? "en", ["common"])),
      // Will be passed to the page component as props
    },
  };
}
