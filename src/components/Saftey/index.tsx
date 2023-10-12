import { useTranslation } from "react-i18next";
import MainSlider from "../lights-section/slider";
import SectionItem from "./sectionItem";

export default function Safety() {
  const { t, i18n } = useTranslation("common");

  return (
    <div id='Safety'>
      <MainSlider>
        <SectionItem
          headLine={t("safteySlider1Head")}
          description={t("safteySlider1Desc")}
          src='assets/safety/safteyVideo.webm'
          isImage={false}
        />
        <SectionItem
          headLine={t("safteySlider2Head")}
          description={t("safteySlider2Desc")}
          src='assets/safety/tinyVideo.webp'
          isImage={true}
        />
        <SectionItem
          headLine={t("safteySlider3Head")}
          description={t("safteySlider3Desc")}
          src='assets/safety/tinyVideo2.webp'
          isImage={true}
        />
        <SectionItem
          headLine={t("safteySlider4Head")}
          description={t("safteySlider4Desc")}
          src='assets/safety/tinyVideo3.webp'
          isImage={true}
        />
      </MainSlider>
    </div>
  );
}
