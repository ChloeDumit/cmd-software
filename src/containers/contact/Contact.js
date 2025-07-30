import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {  contactInfo } from "../../portfolio";

import ContactForm from "../../components/contactForm/ContactForm";

export default function Contact() {
  return (
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className={"subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>
            <div className={"contact-text-div"}>
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
            </div>
          </div>
          <div className="contact-form-div">
            <ContactForm />
          </div>
        </div>
        <SocialMedia />
      </div>
  );
}
