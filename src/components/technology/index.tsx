import MainSlider from "../lights-section/slider";
import SectionItem from "./sectionItem";

export default function Technology({ isInterior }: { isInterior?: boolean }) {
  return (
    <div id={isInterior ? "interior" : "technology"}>
      {isInterior ? (
        <MainSlider>
          <SectionItem
            key={1}
            headLine={`Interior Feature Slide Heading`}
            description='This is a test description area for the interior feature slide'
            image='assets/interior1.webp'
          />
          <SectionItem
            key={2}
            headLine={`Panoramic Sunroof`}
            description='This is a test description area for the interior feature slide'
            image='assets/interior3.webp'
          />
          <SectionItem
            key={3}
            headLine='Panoramic Curved Display'
            description='This is a test description area for the interior feature slide'
            image='assets/tech3.webp'
          />
        </MainSlider>
      ) : (
        <MainSlider>
          <SectionItem
            key={1}
            headLine={`Shift By Wire (SBW) / Drive Mode Select (DMS)`}
            description='This is a test description area for the interior feature slide'
            image='assets/tech4.webp'
          />
          <SectionItem
            key={2}
            description={`This is a test description area for the interior feature slide`}
            headLine='Smartstream G2.0 / Smartstream G1.6 T-GDi'
            image='assets/tech2.webp'
          />
        </MainSlider>
      )}
    </div>
  );
}
