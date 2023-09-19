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
  const { t, i18n } = useTranslation("common");
  return (
    <div style={{ direction: i18n?.language == "en" ? "ltr" : "rtl" }}>
      <img src='/assets/TaillightOn.webp'  style={{width:'0px',height:'0px'}}/>
      <img src='/assets/TaillightOff.webp'  style={{width:'0px',height:'0px'}}/>
      <img src='/assets/HeadlightOff.webp'  style={{width:'0px',height:'0px'}}/>
      <img src='/assets/HeadlightOn.webp'  style={{width:'0px',height:'0px'}}/>
      <Layout>
        <PromoVideo key={"promoVideo"} />
        <BeautyShoot
          textHead1='Bold and Sleek'
          textHead2='The Ultimate Urban SUV.'
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
          textHead1={"When You Move,"}
          textHead2={"Inspiration Is Never Out Of Reach."}
        />
        <Footer />
      </Layout>
    </div>
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
