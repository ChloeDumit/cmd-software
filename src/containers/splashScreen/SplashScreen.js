import React from "react";
import "./SplashScreen.css";
import { splashScreen } from "../../portfolio";
import Lottie from "lottie-react";

export default function SplashScreen() {
  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        <Lottie animationData={splashScreen.animation} />
      </div>
    </div>
  );
}
