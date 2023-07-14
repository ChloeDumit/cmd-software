import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./About.scss";
import aboutLottie from "../../assets/lottie/about.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, about } from "../../portfolio";

export default function About() {
  if (!about.displayAbout) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="about-main" id="about">
        <div className="about-main">
          <div className="about-image-div">
            <DisplayLottie animationData={aboutLottie} />
          </div>
          <div className="about-text-div">
            <div>
              <h1 className="about-text"> {about.title} </h1>
              <p className="about-text-p subTitle">{about.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
