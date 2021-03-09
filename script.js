'use strict';

// selecting elements
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

let activePlayer = 0
let currentScore = 0
let playing = true

// starting conditions
let score = [0,0]
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden")

// rolling dice functionality

rollDiceBtn.addEventListener("click", function(){
    if(playing){
    const diceNum = Math.trunc(Math.random()*6) + 1;
    console.log(diceNum)
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${diceNum}.png`

    if(diceNum != 1){
        currentScore += diceNum
        document.getElementById(`current--${activePlayer}`).textContent = currentScore


      }else {
              currentScore = 0
              document.getElementById(`current--${activePlayer}`).textContent = 0
              activePlayer = activePlayer === 0 ? 1:0

              if(activePlayer === 1){
                  player0.classList.remove('player--active')
                  player1.classList.add('player--active')

              } else {
                  player0.classList.add('player--active')
                  player1.classList.remove('player--active')
              }




          }
        }
      })
  holdBtn.addEventListener("click", function(){
    // 1. add current score to score
    if(playing){
    score[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent= score[activePlayer]
    if(score[activePlayer] >= 10){
        console.log("hi")
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        playing = false

    }
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1:0
    if(activePlayer === 1){
        player0.classList.remove('player--active')
        player1.classList.add('player--active')

    } else {
        player0.classList.add('player--active')
        player1.classList.remove('player--active')
    }

    // 2. if player reaches 100 he wins

    // 3. if player is less than 100 then switch players
    }
})
