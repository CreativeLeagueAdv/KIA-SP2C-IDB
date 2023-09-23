import WheelController from "../wheel-control";
import LightsSection from "./lightsSection";
import MainSlider from "./slider";

export default function LightsSlider() {
    return (
      <MainSlider>
        <LightsSection type='lights' initial={"Off"} />
        <WheelController />
      </MainSlider>
    );
}