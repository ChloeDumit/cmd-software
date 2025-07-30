import React, { useState, useRef } from "react";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        "service_n7lobvq",
        "template_l9zu29t",
        form.current,
        "CG9EksF5__f4N-wPb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false)
          setName("");
          setEmail("");
          setMessage("");

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Nombre</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mensaje</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="button-container">
          <button type="submit" value="Send">
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
}
