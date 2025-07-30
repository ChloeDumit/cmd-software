import React, { useEffect, useState } from "react";
import "./Top.scss";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    window.addEventListener('load', scrollFunction);
    
    return () => {
      window.removeEventListener('scroll', scrollFunction);
      window.removeEventListener('load', scrollFunction);
    };
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  return (
    <button 
      onClick={TopEvent} 
      id="topButton" 
      title="Go to top"
      className={isVisible ? 'visible' : ''}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
