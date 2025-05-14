import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ card }) => {
  return (
    <Link
      to={`/card/${card.code}`}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 p-2"
    >
      <img src={card.image} alt={card.code} className="rounded-xl w-full" />
      <p className="text-center mt-2 font-medium text-gray-700">
        {card.value} of {card.suit}
      </p>
    </Link>
  );
};

export default CardItem;
