import MainSlider from "../lights-section/slider";
import SectionItem from "./sectionItem";

export default function Technology({ isInterior }: { isInterior?: boolean }) {
  return (
    <div id={isInterior ? "interior" : "technology"}>
      {isInterior ? (
        <MainSlider>
          <SectionItem
            headLine={`INTERIOR`}
            description='THE ALL NEW SPORTAGE INTERIOR'
            image='/assets/tech5.webp'
          />
          <SectionItem
            headLine='Panoramic Curved Display'
            description={`A curved, unified HD display combines driving functions and the center infotainment and navigation screens in one manageable frame. Simple graphics and touch commands give the driver top priority.`}
            image='/assets/intereor2.webp'
          />
          <SectionItem
            headLine={`Panoramic Sunroof`}
            description='The broad panoramic sunroof adds a feeling of light and space to the interior. With one touch, it will let in sunlight, starlight, and breezes to help everyone stay cool and refreshed.'
            image='/assets/interior3.webp'
          />
          <SectionItem
            headLine={`Infotainment/Climate Switchable Controller`}
            description='Infotainment and climate functions share the same LCD softkey keyboard. Press the fan icon button to transform the controls on the right to climate. Press the arrow icon button to switch them to infotainment.'
            image='/assets/tech3.webp'
          />
          <SectionItem
            headLine={`Shift By Wire (SBW) / Drive Mode Select (DMS)`}
            description='Using a front view camera and front radar(optional), FCA can detect a vehicle, a pedestrian, or a cyclist ahead. It can warn you, or even brake automatically. FCA also works when crossing or turning left at an intersection.'
            image='/assets/tech4.webp'
          />
        </MainSlider>
      ) : (
        <MainSlider>
          <SectionItem
            headLine={`Shift By Wire (SBW) / Drive Mode Select (DMS)`}
            description='Using a front view camera and front radar(optional), FCA can detect a vehicle, a pedestrian, or a cyclist ahead. It can warn you, or even brake automatically. FCA also works when crossing or turning left at an intersection.'
            image='/assets/tech4.webp'
          />
          <SectionItem
            description={`Each engine is built to be both efficient and durable. Paired with a transmission calibrated for smooth interaction. To enhance your driving experience.`}
            headLine='Smartstream G2.0 / Smartstream G1.6 T-GDi'
            image='/assets/tech2.webp'
          />
        </MainSlider>
      )}
    </div>
  );
}
