import { useState } from "react";

import Header from "../components/Header.jsx";
import HomeIntro from "../components/HomeIntro.jsx";
import Cards from "../components/Cards.jsx";
import CardsSection from "../components/CardsSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <Header />
      <HomeIntro />
      <Cards cards={cards} />
      <CardsSection />
      <Footer />
    </>
  );
}
