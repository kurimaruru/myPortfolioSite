import { React } from "react";
import Baseball from "../image/baseball.png";
import Guitar from "../image/guitar.png";
import Cat from "../image/cat.png";
import Fish from "../image/fishing.png";
import Snow from "../image/snow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hobbies } from "./hobbies";
import Slider from "react-slick";


export const About = () => {
  const setting = {
    autoplay: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    allow: true,
    fade: true,
  };

  return (
    <>
      <div className="m-0 text-center md:h-auto md:mx-10" id="About">
        <Slider {...setting}>
          <Hobbies png={Baseball} title={"I Love Baseball !"} detail={"#####"}></Hobbies>
          <Hobbies png={Guitar} title={"I Love Music !"} detail={"#####"}></Hobbies>
          <Hobbies png={Cat} title={"I Love Cat !"} detail={"#####"}></Hobbies>
          <Hobbies png={Fish} title={"I Love Fishing !"} detail={"#####"}></Hobbies>
          <Hobbies png={Snow} title={"I Love Snowboard !"} detail={"#####"}></Hobbies>
        </Slider>
      </div>
    </>
  );
};
