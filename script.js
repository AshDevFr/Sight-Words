("use strict");

const words = [
  "a",
  "and",
  "away",
  "big",
  "blue",
  "can",
  "come",
  "down",
  "find",
  "for",
  "funny",
  "go",
  "help",
  "here",
  "I",
  "in",
  "is",
  "it",
  "jump",
  "little",
  "look",
  "make",
  "me",
  "my",
  "not",
  "one",
  "play",
  "red",
  "run",
  "said",
  "see",
  "the",
  "three",
  "to",
  "two",
  "up",
  "we",
  "where",
  "yellow",
  "you",
  "all",
  "am",
  "are",
  "at",
  "ate",
  "be",
  "black",
  "brown",
  "but",
  "came",
  "did",
  "do",
  "eat",
  "four",
  "get",
  "good",
  "have",
  "he",
  "into",
  "like",
  "must",
  "new",
  "no",
  "now",
  "on",
  "our",
  "out",
  "please",
  "pretty",
  "ran",
  "ride",
  "saw",
  "say",
  "she",
  "so",
  "soon",
  "that",
  "there",
  "they",
  "this",
  "too",
  "under",
  "want",
  "was",
  "well",
  "went",
  "what",
  "white",
  "who",
  "will",
  "with",
  "yes",
];

const wordBox = document.getElementById("word-box");
const wordEls = words.map((word) => {
  const wordEl = document.createElement("p");
  wordEl.className = "word";
  let letters = word.split("");
  wordEl.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    wordEl.append(span);
  });
  wordBox.append(wordEl);
  return wordEl;
});

let currentWordIndex = 0;
const maxWordIndex = wordEls.length - 1;
wordEls[currentWordIndex].style.opacity = "1";

const rotateText = () => {
  const currentWord = wordEls[currentWordIndex];
  const nextWordIndex = Math.round(Math.random() * maxWordIndex);
  const nextWord = wordEls[nextWordIndex];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 10 + i);
  });
  currentWordIndex = nextWordIndex;
};

document.getElementsByTagName("body")[0].addEventListener("click", function () {
  const interval = setInterval(rotateText, 40);

  setTimeout(function () {
    clearInterval(interval);
  }, 500);
});
