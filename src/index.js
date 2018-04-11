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

function setTweet(text, author) {
  tweetQuote.href = `http://twitter.com/intent/tweet?text=${encodeURIComponent(text)}%0A${encodeURIComponent(author)}`;
}

function logQuote() {
  fetch('https://talaikis.com/api/quotes/random/')
    .then(res => res.json())
    .then((json) => {
      quoteText.textContent = `“${json.quote}”`;
      quoteAuthor.textContent = `- ${json.author}`;
      setTweet(quoteText.textContent, quoteAuthor.textContent);
    }).catch(() => {
      const { quote, author } = localQuote();
      quoteText.textContent = quote;
      quoteAuthor.textContent = `- ${author}`;
      setTweet(quoteText.textContent, quoteAuthor.textContent);
    });
}

window.addEventListener('load', logQuote);
newQuote.addEventListener('click', logQuote);
