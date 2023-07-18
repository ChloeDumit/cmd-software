import React from "react";
import { Fade } from "react-reveal";
import "./About.scss";

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
            <img src={about.photo} />
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
