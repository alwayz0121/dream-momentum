const quotes = [
  {
    quote:
      "You become what you think about most, but you also attract what you think about most.",
    author: "Book- Secret",
  },
  {
    quote: "Thoughts become thinkgs!",
    author: "Book- Secret",
  },
  {
    quote: "Your transmission creates your life and it creates the world.",
    author: "Book- Secret",
  },
  {
    quote:
      "If you can think about what you want in your mind, and make that your dominant thought, you will bring it into your life.",
    author: "Book- Secret",
  },
  {
    quote: "You create your own universe as you go along.",
    author: "Winston Churchill",
  },
  {
    quote: "You create your like. Whatever you sow, you reap!",
    author: "Book- Secret",
  },
  {
    quote: "All that we are is a result of what we have thought.",
    author: "Buddha",
  },
  {
    quote: "What you are thinking now is creating your future life.",
    author: "Book- Secret",
  },
  {
    quote: "The cause is always your thoughts.",
    author: "Book- Secret",
  },
  {
    quote:
      "Your whole life change if you change from focusing on what you do not want, to focusing on what you do want.",
    author: "Book- Secret",
  },
  {
    quote: "Decide right now that you are going to think only good thoughts.",
    author: "Book- Secret",
  },
  {
    quote:
      "The Creative Process helps you create what you want in three simple steps: ask, believe, and receive.",
    author: "Book- Secret",
  },
  {
    quote:
      "You get to choose what you want, but you must get clear about what you want.",
    author: "Book- Secret",
  },
  {
    quote: "You can have, be, or do anything, and there are no limits.",
    author: "Book- Secret",
  },
  {
    quote: "Believe that it's already yours. Have unwavering faith.",
    author: "Book- Secret",
  },
  {
    quote:
      "You must act, speak, and think, as though you are receiving it now.",
    author: "Book- Secret",
  },
  {
    quote:
      "Act as if you have it already. As you make-believe, you will begin to believe you have received.",
    author: "Book- Secret",
  },
  {
    quote:
      "Your belief that you have if, that undying faith, is your greatest power.",
    author: "Book- Secret",
  },
  {
    quote:
      "How it will happen, how the Universe will bring it to you, is not your concern or job.",
    author: "Book- Secret",
  },
  {
    quote:
      "Ask once, believe you have received, and all you have to do to receive is feel good.",
    author: "Book- Secret",
  },
  {
    quote: "Trust the Universe. Trust and believe and have faith.",
    author: "Book- Secret",
  },
  {
    quote:
      "We all possess more power and greater possibilities than we realize, and visualizing is one of the greatest of these powers.",
    author: "Book- Secret",
  },
  {
    quote:
      "Imagination is everything. It is the preview of life's coming attractions.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The shortcut to anything you want in your life is to BE and FEEL happy now!",
    author: "Book- Secret",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
