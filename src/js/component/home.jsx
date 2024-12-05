import React from "react";
import Navbar from "./Navbar";
import FirstContainer from "./FirstContainer";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  const navBar = {
    buttonCompany: "Viajes increíbles",
    buttonTrips: "Nuestros destinos",
    buttonPacks: "Viajes acompañados",
    buttonUs: "Quienes somos?",
    buttonContact: "Contactanos",
  };
  const firstContainer = {
    title: "Vení a recorrer el mundo!",
    description:
      "¡Vuela hacia tus sueños! Descubre paisajes de ensueño, sabores exóticos y aventuras inolvidables. Con nosotros, cada viaje es magia pura. Vive emociones únicas, crea recuerdos eternos. ¡Tu mejor viaje empieza aquí, porque mereces lo extraordinario!",
    button: "Quiero viajar!",
  };

  const footer = {
    title: "© Viajes Increibles",
    year: "2024 "
  };
  return (
    <>
      <Navbar {...navBar} />
      <FirstContainer {...firstContainer} />
      <Cards />
      <Footer {...footer} />
    </>
  );
};

export default Home;
