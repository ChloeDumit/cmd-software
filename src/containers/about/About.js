import React from "react";
import "./About.scss";
import Lottie from "lottie-react";
import { about } from "../../portfolio";
import about_lottie from "../../assets/lottie/about.json";

export default function About() {
  if (!about.displayAbout) {
    return null;
  }
  return (
      <div className="about-main" id="about">
        <div className="about-main">
          <div className="about-image-div">
            <Lottie animationData={about_lottie} loop={true} />
          </div>
          <div className="about-text-div">
            <div>
              <h1 className="about-text"> {about.title} </h1>
              <p className="about-text-p subTitle">{about.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
