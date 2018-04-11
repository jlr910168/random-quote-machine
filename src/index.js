import './style.css';
import quotes from './quotes.json';

const newQuote = document.getElementById('new-quote');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const tweetQuote = document.getElementById('tweet-quote');

const localQuote = () => {
  const rand = max => Math.floor(Math.random() * max);
  return quotes[rand(quotes.length)];
};

function setTweetHref(text, author) {
  tweetQuote.href = `http://twitter.com/intent/tweet?text=${encodeURIComponent(text)}%0A${encodeURIComponent(author)}`;
}

function setQuote(quoteObj) {
  const { quote, author } = quoteObj;
  quoteText.textContent = `“${quote}”`;
  quoteAuthor.textContent = `- ${author}`;
  setTweetHref(quoteText.textContent, quoteAuthor.textContent);
}

function displayQuote() {
  fetch('https://talaikis.com/api/quotes/random/')
    .then(res => res.json())
    .then((json) => {
      setQuote(json);
    }).catch(() => {
      setQuote(localQuote());
    });
}

window.addEventListener('load', displayQuote);
newQuote.addEventListener('click', displayQuote);
