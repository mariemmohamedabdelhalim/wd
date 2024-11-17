
const quotes = [
    '"Resentment is like drinking poison and waiting for your enemies to die." - Nelson Mandela',
    '"The best way to predict the future is to invent it." - Alan Kay',
    '"Life is what happens when you’re busy making other plans." - John Lennon',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer'
  ];
  function addText() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.querySelector('.wisdom p');
    quoteElement.textContent = randomQuote;
  }