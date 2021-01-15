'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById("score--1");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
   // Generate a random dice roll between 1 - 6
   const dice = Math.trunc(Math.random() * 6) + 1;

   // Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

   // Check for a rolled 1: if true, switch to next player and clear score
    if(dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Player rolled a 1, change player and reset currentScore
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        // If activeplayer strictly equals 0 then activeplayer becomes 1, else activeplayer becomes o
        activePlayer = activePlayer === 0 ? 1 : 0;
        // Change active player background to display on the correct player
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});