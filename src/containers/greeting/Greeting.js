import React, { useContext } from "react";
import "./Greeting.scss";
import mockup from "../../assets/lottie/mockup.json";
import Lottie from "lottie-react";
import Button from "../../components/button/Button";

import {  greeting } from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
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
            <Lottie animationData={mockup} loop={true} />
          </div>
        </div>
      </div>
  );
}
