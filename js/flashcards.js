let decks = {
  "Programming Basics": [
    {
      question: "What is a variable?",
      answer: "A storage location for data.",
    },
    {
      question: "What is a loop?",
      answer: "A structure that repeats code.",
    },
  ],
  "Web Development": [
    {
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language",
    },
    {
      question: "What does CSS control?",
      answer: "The style and layout of web pages.",
    },
  ],
};

let currentDeck = [];
let currentIndex = 0;

const deckSelect = document.getElementById("deck-select");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const cardEl = document.getElementById("card");

for (let deckName in decks) {
  const option = document.createElement("option");
  option.value = deckName;
  option.textContent = deckName;
  deckSelect.appendChild(option);
}

loadDeck(deckSelect.value);

deckSelect.addEventListener("change", () => {
  loadDeck(deckSelect.value);
});

function loadDeck(name) {
  currentDeck = decks[name];
  currentIndex = 0;
  showCard();
}

function showCard() {
  const card = currentDeck[currentIndex];
  questionEl.textContent = card.question;
  answerEl.textContent = card.answer;
  cardEl.classList.remove("flipped");
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentDeck.length;
  showCard();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentDeck.length) % currentDeck.length;
  showCard();
});

document.getElementById("flip").addEventListener("click", () => {
  cardEl.classList.toggle("flipped");
});

cardEl.addEventListener("click", () => {
  cardEl.classList.toggle("flipped");
});
