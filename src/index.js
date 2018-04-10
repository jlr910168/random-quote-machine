import './style.css';
import quotes from './quotes.json';

const newQuote = document.getElementById('new-quote');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const tweetQuote = document.getElementById('tweet-quote');

const randomQuote = () => {
  const rand = max => Math.floor(Math.random() * max);
  return quotes[rand(quotes.length)];
};

const getQuote = () => {
  const { text, author } = randomQuote();
  quoteText.innerHTML = text;
  quoteAuthor.innerHTML = `- ${author}`;
  tweetQuote.href =
    `http://twitter.com/intent/tweet?text=${encodeURIComponent(text)}%0A%20%2D%20${encodeURIComponent(author)}`;
};

window.addEventListener('load', getQuote);
newQuote.addEventListener('click', getQuote);
