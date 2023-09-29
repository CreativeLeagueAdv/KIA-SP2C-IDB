import MainSlider from "../lights-section/slider";
import SectionItem from "./sectionItem";

export default function Safety() {
  return (
    <div id='safety'>
      <MainSlider>
        <SectionItem
          headLine={`Lane Keeping Assist (LKA)`}
          description={`Lane Keeping Assist is designed to help detect lane markings (or road edges) while driving over a certain speed. Lane Keeping Assist will warn the driver if the vehicle leaves the lane without using the turn signal, or will automatically assist the driver's steering to help prevent the vehicle from departing the lane.`}
          src='assets/safety/tinyVideo.webp'
          isImage={true}
        />
        <SectionItem
          headLine={`Lane Following Assist (LFA)`}
          description={`Lane Following Assist is designed to help detect lane markings and/or vehicles on the road, and assists the driver's steering to help keep the vehicle between lanes.`}
          src='assets/safety/tinyVideo2.webp'
          isImage={true}
        />
        <SectionItem
          headLine={`Smart Cruise Control (SCC)`}
          description={`Smart Cruise Control is designed to detect the vehicle ahead and help maintain the desired speed and minimum distance with the vehicle ahead.`}
          src='assets/safety/tinyVideo3.webp'
          isImage={true}
        />
      </MainSlider>
    </div>
  );
}
