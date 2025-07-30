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
  photo: require("./assets/images/mockup.png"),
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const about = {
  title: "Sobre nosotros",
  subTitle:
    "En CMD Software nos dedicamos a la creación de sitios web y soluciones de software a medida, ayudando a empresas y emprendedores a potenciar su presencia digital. Somos una empresa uruguaya con más de 5 años de experiencia en el desarrollo de proyectos personalizados, eficientes y escalables. Trabajamos con clientes de distintos sectores, adaptándonos a sus necesidades específicas y transformando ideas en productos reales y funcionales. Nos enfocamos en la comunicación clara, el código de calidad y la construcción de relaciones de confianza a largo plazo. En CMD Software no solo desarrollamos tecnología: construimos tu presencia digital con propósito y profesionalismo.",
  photo: require("./assets/images/chloe.png"),
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
      title: "Web Informativa",
      description:
        "Amplía tu alcance en línea con nuestras páginas web que destacan y transmiten tu mensaje de manera efectiva.",
    },
    {
      title: "Ecommerce",
      description:
        "Crea una tienda virtual atractiva y funcional para maximizar tus ventas y llegar a nuevos clientes en cualquier momento y lugar.",
    },
    {
      title: "Reserva de servicios",
      description:
        " Simplifica la gestión de reservas y optimiza tu negocio con nuestras páginas web especializadas en reserva de servicios.",
    },
    {
      title: "Integración de sistemas",
      description:
        "Conecta tu sitio web con plataformas externas como pasarelas de pago, CRMs, sistemas de reservas o redes sociales para automatizar procesos y mejorar la eficiencia de tu negocio.",
    },
    {
      title: "Blog Profesional",
      description:
        "Comparte contenido de valor y posiciona tu marca con blogs profesionales, fáciles de administrar y optimizados para SEO.",
    },
    {
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
