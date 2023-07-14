/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loading"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Chloe Dumit",
  title: "Creamos tu pagina web a medida.",
  subTitle: emoji(
    "Transformando tu visión en realidad digital: Desarrollo web a medida para destacarte en línea."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const about = {
  title: "Sobre nosotros",
  subTitle:
    "Bienvenidos a nuestra página de venta de desarrollo web. Somos un equipo apasionado de desarrolladores full stack, especializados en crear soluciones web personalizadas que se adaptan a tus necesidades y objetivos comerciales. Desde diseños atractivos hasta funcionalidades avanzadas, trabajamos para impulsar tu negocio y dejar una impresión duradera en tus usuarios. Contáctanos hoy y convierte tus ideas en realidad.",
  displayAbout: true,
};

// Social Media Links

const socialMediaLinks = {
  instagram: "https://instagram.com/cmdsoftware?igshid=NTc4MTIwNjQ2YQ==",
  linkedin:
    "https://www.linkedin.com/in/chlo%C3%A9-dumit-armand-ugon-85450415a/",
  gmail: "cmd.software.info@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

// Services section

const services = {
  display: true, //Set it to true to show services Section
  services: [
    {
      logo: require("./assets/images/1.png"),
      title: "Web Informativa",
      description:
        "Amplía tu alcance en línea con nuestras páginas web que destacan y transmiten tu mensaje de manera efectiva.",
    },
    {
      logo: require("./assets/images/2.png"),
      title: "Ecommerce",
      description:
        "Crea una tienda virtual atractiva y funcional para maximizar tus ventas y llegar a nuevos clientes en cualquier momento y lugar.",
    },
    {
      logo: require("./assets/images/3.png"),
      title: "Reserva de servicios",
      description:
        " Simplifica la gestión de reservas y optimiza tu negocio con nuestras páginas web especializadas en reserva de servicios.",
    },
    {
      logo: require("./assets/images/4.png"),
      title: "A medida",
      description:
        "Haz realidad tu visión con soluciones web personalizadas, desde interfaces intuitivas hasta características avanzadas, para impulsar tu negocio y dejar una impresión duradera en tus usuarios.",
    },
  ],
};

const contactInfo = {
  title: "Contactanos",
  subtitle: "¡Ponte en contacto con nosotros y haz realidad tu visión web!",
  email_address: "cmd.software.info@gmail.com",
};
export {
  about,
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  services,
  contactInfo,
};
