import React, { useContext } from "react";
import "./services.scss";
import { services } from "../../portfolio";
import ServiceCard from "../../components/serviceCard/serviceCard";

export default function Services() {
  if (services.display) {
    return (
      <div id="services">
          <div className="services-container" id="workExperience">
            <div className="card-container">
              <h1 className="services-heading">Nuestros servicios</h1>
              <div className="services-cards-div">
                {services.services.map((card, i) => {
                  return (
                    <ServiceCard
                      key={i}
                      cardInfo={{
                        logo: card.logo,
                        title: card.title,
                        description: card.description,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
      </div>
    );
  }
  return null;
}
