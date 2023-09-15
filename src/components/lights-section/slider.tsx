import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LightsSection from ".";
import styles from './styles/styles.module.css'
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewIcon
      style={{
        ...style,
        color: "white",
        width: "50px",
        height: "50px",
        insetInlineEnd: "95% !important",
        zIndex: "1000",
      }}
      onClick={onClick}
      className={className}
    />
  );
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <ArrowForwardIosIcon
      style={{
        color: "white",
        width: "50px",
        height: "50px",
        insetInlineStart: "95% !important",
      }}
      onClick={onClick}
      className={className}
    />
  );
}
export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    style: {
      height: "95vh",
    },
  };

  return (
    <>
      <div id='lights' className={styles.container}>
        <Slider {...settings}>
          <LightsSection type='Head' initial={"Off"} />
          <LightsSection type='Tail' initial={"Off"} />
        </Slider>
      </div>
    </>
  );
}
