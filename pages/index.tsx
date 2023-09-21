import Layout from "../src/layouts/main-theme-layout";
import PromoVideo from "../src/components/promo-video";
import ColorVariants from "../src/components/color-variants";
import BeautyShoot from "../src/components/beauty-shoot";
import Footer from "../src/components/footer";
import SpecsSection from "../src/components/specifications";
import AppView from "../src/components/360-images";
import { useTranslation } from "next-i18next";
import LightsSlider from "../src/components/lights-section";
import Technology from "../src/components/technology";
import Safety from "../src/components/Saftey";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  return (
    <>
      <Layout>
        <PromoVideo key={"promoVideo"} />
        <BeautyShoot
          textHead1='More than a small SUV. It’s a statement'
          textHead2=''
          desc={true}
        />
        <ColorVariants />
        <LightsSlider />
        <AppView />
        <Technology isInterior={true} />

        <Safety />
        <Technology />
        <SpecsSection />
        <BeautyShoot
          desc={false}
          image={"/assets/finalBeauty.webp"}
          textHead1={"Speaks your language"}
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
