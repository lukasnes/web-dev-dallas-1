import getRandomWord from './src/randomWord';
import setImage from './src/sharkImage';
import { setupWord,isLetterInWord,revealLetterInWord } from './src/word';
import setupGuesses from './src/guess';
import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setImage(document.querySelector('#shark-img'),numWrong)
  setupWord(word,document.querySelector('#word-container'))

  const handleGuess = (guessEvent,letter) => {
    console.log(letter)
    guessEvent.target.disabled = true
    if(isLetterInWord(letter,word) === true){
      revealLetterInWord(letter,word)
    } else {
      numWrong++
      setImage(document.querySelector('#shark-img'),numWrong)
    }
  }

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess)
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};
// console.log('apple'.repeat(7))
initSharkwords();
