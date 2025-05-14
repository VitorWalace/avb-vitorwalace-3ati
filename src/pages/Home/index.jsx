import React, { useEffect, useState } from 'react';
import { drawCards } from '../api/deckApi';
import CardItem from '../components/CardItem';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const drawnCards = await drawCards();
      setCards(drawnCards);
    };
    fetchCards();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        🎴 Baralho Interativo
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card) => (
            <CardItem key={card.code} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
