'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden")

// rolling dice functionality

rollDiceBtn.addEventListener("click", function(){
    const diceNum = Math.trunc(Math.random()*6) + 1;
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${diceNum}.png`
})
