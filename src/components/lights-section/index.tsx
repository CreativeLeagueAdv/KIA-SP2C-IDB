import LightsSection from "./lightsSection";
import MainSlider from "./slider";

export default function LightsSlider() {
    return (
      <MainSlider>
          <LightsSection type='Head' initial={"Off"} />
          <LightsSection type='Tail' initial={"Off"} />
      
      </MainSlider>
    );
}