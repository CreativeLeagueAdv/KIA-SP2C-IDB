import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./styles/styles.module.css";
import { ReactNode } from "react";
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
export default function MainSlider({
  children,
  mobileHeight,
}: {
  children: ReactNode[];
  mobileHeight?:boolean
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    swipeToSlide: false,
    touchMove: false,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    style: {
      height: { xs: mobileHeight?'30vh':"300px", sm: mobileHeight?'30vh':"300px", lg: "100vh", xl: "100vh" },
    },
  };

  return (
    <>
      <div
        id='lights'
        className={mobileHeight ? styles.secondContainer : styles.container}>
        <Slider {...settings}>{children.map((item) => item)}</Slider>
      </div>
    </>
  );
}
