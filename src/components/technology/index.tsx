import { useTranslation } from "react-i18next";
import MainSlider from "../lights-section/slider";
import SectionItem from "./sectionItem";

export default function Technology({ isInterior }: { isInterior?: boolean }) {
      const { t } = useTranslation("common");

  return (
    <div id={isInterior ? "Interiors" : "Technology"}>
      {isInterior ? (
        <MainSlider>
          <SectionItem
            key={1}
            headLine={t("techSlider1Head")}
            description={t("techSlider1Desc")}
            image='assets/tech/screen.png'
          />
          <SectionItem
            key={2}
            headLine={t("techSlider2Head")}
            description={t("techSlider2Desc")}
            image='assets/tech/sunroof.png'
          />
          <SectionItem
            key={3}
            headLine={t("techSlider3Head")}
            description={t("techSlider3Desc")}
            image='assets/tech/cassete.png'
          />
        </MainSlider>
      ) : (
        <MainSlider>
          <SectionItem
            key={1}
            headLine={t("engineSlider1Head")}
            description={t("engineSlider1Desc")}
            image='assets/tech/tech4.webp'
          />
          <SectionItem
            key={2}
            headLine={t("engineSlider2Head")}
            description={t("engineSlider2Desc")}
            image='assets/tech/tech2.webp'
          />
        </MainSlider>
      )}
    </div>
  );
}
