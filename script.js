'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);

let highScore = 0;

const displayMessge = function (message, message1) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.message').style.backgroundColor = message1;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // player gives no value
  if (!guess) {
    displayMessge('🤷No number!');
    document.querySelector('.message').style.backgroundColor = 'red';
    document.querySelector('body').style.backgroundColor = '#222';
  }
  // player gives correct guess
  else if (guess === secretNumber) {
    displayMessge('🎉Correct number!', 'darkgreen');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  // player gives different from secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessge(
        guess > secretNumber ? '📈number too high' : '📉number is too low',
        guess > secretNumber ? 'darkred' : 'darkred'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessge('💥 game lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//reset all the UI interface to start agin the game when click again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessge('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
