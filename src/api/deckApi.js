import axios from 'axios';

const API = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck',
});

export const drawCards = async (count = 12) => {
  const deck = await API.get('/new/shuffle/?deck_count=1');
  const deckId = deck.data.deck_id;
  const cards = await API.get(`/${deckId}/draw/?count=${count}`);
  return cards.data.cards;
};
