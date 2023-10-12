import { useTranslation } from "react-i18next";
import MainSlider from "../lights-section/slider";
import SectionItem from "./sectionItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Safety() {
  const { t, i18n } = useTranslation("common");
  const { isReady }=useRouter();
  const [source, setSource] = useState({
    type: "webm",
    src: "assets/safety/safteyVideo.webm",
  });
  useEffect(() => {
    if (isReady) {
      if (window && window.innerWidth <= 768) {
        setSource({
          type: "mp4",
          src: "assets/safety/safteyVideo.mp4",
        });
      }
    }
  }, [isReady]);
  return (
    <div id='Safety'>
      <MainSlider>
        <SectionItem
          headLine={t("safteySlider1Head")}
          description={t("safteySlider1Desc")}
          src={source}
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
