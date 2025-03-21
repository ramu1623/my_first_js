'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let score = 20;
let highscore = 0;
//refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//clicking check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when their is no number
  if (!guess) {
    document.querySelector('.message').textContent = '❌ NO number!';
    //correct number
  } else if (guess === secretnumber) {
    document.querySelector('.number').textContent = secretnumber;
    displayMessage('🎉 Correct Number!');
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#24ad52';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //given number !== secret number and refactoring technique
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? '📈 Too High!' : '📉 Too Low!');
      //document.querySelector('.message').textContent = guess > secretnumber ? '📈 Too High!':'📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost The Game!');
      //document.querySelector('.message').textContent = '💥 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//clicking again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
