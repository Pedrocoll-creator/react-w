import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

// Lista de tarjetas con imágenes válidas
const cards = [
  {
    image: "https://lumiere-a.akamaihd.net/v1/images/image_81e2d881.jpeg",
    title: "Capitán América",
    description: "Capitán América vs Hulk Rojo",
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/vengadores-endgame-66575160add0a.jpg",
    title: "Vengadores",
    description: "Vengadores vs Thanos",
  },
  {
    image: "https://cdn.milenio.com/uploads/media/2021/12/14/lo-que-no-sabias-de-1.jpg",
    title: "Spiderman 3",
    description: "Spiderman vs Venom",
  },
];

// Componente principal
const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          {cards.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card card={item} /> 
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
