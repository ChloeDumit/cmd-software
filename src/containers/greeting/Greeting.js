import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import womanGreeting from "../../assets/lottie/womanGreeting.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, greeting } from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text"> {greeting.title} </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <div className="button-greeting-div">
                <Button text="Contactanos" href="#contact" />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <DisplayLottie animationData={womanGreeting} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
