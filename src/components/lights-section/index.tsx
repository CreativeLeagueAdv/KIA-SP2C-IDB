import LightsSection from "./lightsSection";
import MainSlider from "./slider";

export default function LightsSlider() {
    return (
      <MainSlider>
          <LightsSection type='lights' initial={"Off"} />
          <LightsSection type='rims' initial={"Off"} />
      
      </MainSlider>
    );
}