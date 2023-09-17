import MainSlider from "../lights-section/slider";
import SectionItem from "./sectionItem";

export default function Safety() {
  return (
    <div id='safety'>
      <MainSlider>
        <SectionItem
          headLine={`Forward Collision-Avoidance Assist (FCA)`}
          description='Using a front view camera and front radar(optional), FCA can detect a vehicle, a pedestrian, or a cyclist ahead. It can warn you, or even brake automatically. FCA also works when crossing or turning left at an intersection.'
          src='/assets/Sportage-LFA.mp4'
          isImage={false}
        />
        <SectionItem
          headLine={`Lane Following Assist (LFA)`}
          description='To help you center the vehicle in the lane while driving, LFA uses the front view camera to help guide the steering, based on lane markings or the car ahead.
'
          src='/assets/saftey.webp'
          isImage={true}
        />
      </MainSlider>
    </div>
  );
}
