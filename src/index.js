import './style.css';
import quotes from './quotes.json';

const newQuote = document.getElementById('new-quote');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');

const randomQuote = () => {
  const rand = max => Math.floor(Math.random() * max);
  return quotes[rand(quotes.length)];
};

const getQuote = () => {
  const { text, author } = randomQuote();
  quoteText.innerHTML = text;
  quoteAuthor.innerHTML = author;
};

window.addEventListener('load', getQuote);
newQuote.addEventListener('click', getQuote);
