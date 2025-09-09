import { useState } from "react";
import { Button } from "./ui/button";

import Cards from "./Cards";
import AddCard from "./AddCard";
import AddBtn from "./AddBtn";

export default function CardsSection() {

  const [cards, setCards] = useState([
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      name: "Albert Einstein",
      desc: "Renowned physicist recognized for relativity and groundbreaking contributions to theoretical physics."
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
      name: "Walter White",
      desc: "High school chemistry teacher turned ruthless meth kingpin, using the alias 'Heisenberg' to build a criminal empire."
    },
    {
      id: 3,
      img: "https://th.bing.com/th/id/OIP.FjuUDVTZGt6L-nYzEDF8BgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Spider-Man",
      desc: "Friendly neighborhood superhero gifted with spider-like abilities, balancing crime-fighting and personal struggles."
    },
    {
      id: 4,
      img: "https://th.bing.com/th/id/OIP.TUC4FWDEcvD-cl4fR5Dn4wHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "L (Lawliet)",
      desc: "Brilliant detective with eccentric habits and sharp deduction, determined to capture Kira in Death Note."
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG",
      name: "Nikola Tesla",
      desc: "Visionary inventor and engineer who pioneered alternating current electricity and wireless transmission."
    },
    {
      id: 6,
      img: "https://th.bing.com/th/id/OIP.XUtcIVV8Pk3aQv8Fp30OSgHaEK?w=202&h=113&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "yuu",
      desc: "The world's strongest boxer lives in his own dimension of time that makes him see everything in slow motion."
    },
    {
      id: 7,
      img: "https://th.bing.com/th/id/OIP.usR3-BSD1Dqmgx1X61ov3AHaFF?w=272&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      name: "Gol D. Roger",
      desc: "Legendary Pirate King who discovered the One Piece and sparked the Great Pirate Era."
    },
    {
      id: 8,
      img: "https://th.bing.com/th/id/OIP.hvRCQ3SFuciKmzU0qLglNwHaDt?w=349&h=174&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      name: "Jack Sparrow",
      desc: "Witty, cunning pirate captain with charm and trickery, always seeking treasure and freedom."
    },
    {
      id: 9,
      img: "https://th.bing.com/th/id/OIP.ZjZh121T1497MGoHNhzKzgHaE7?w=231&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      name: "The Doctor",
      desc: "Time-traveling Time Lord with regenerating forms, exploring the universe with curiosity, compassion, and wit."
    },
    {
      id: 10,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/800px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
      name: "Isaac Newton",
      desc: "Pioneering scientist who formulated the laws of motion and universal gravitation, shaping classical physics."
    },
    {
      id: 11,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/800px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
      name: "Galileo Galilei",
      desc: "Revolutionary astronomer who improved the telescope and championed heliocentrism, challenging established beliefs."
    },
    {
      id: 12,
      img: "https://th.bing.com/th/id/OIP.EPb_8Rf9VDrJKVuss0AJsQHaFI?w=234&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      name: "Loki",
      desc: "Cunning Norse trickster god and master of mischief, shifting between villain and anti-hero."
    }
  ]);

  const [query, setQuery] = useState(""); 
  const [show, setShow] = useState(false);

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 bg-white">
      <AddBtn  
        setQuery={setQuery} 
        setShow={setShow} 
      />
      
      <div className="flex justify-end my-4">
        <Button onClick={() => setShow(true)}>Add Card</Button>
      </div>

      <Cards cards={filteredCards} />

      {show && <AddCard setCards={setCards} setShow={setShow} />}
    </div>
  );
}