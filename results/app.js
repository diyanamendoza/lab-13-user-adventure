import { moneyAliveMessage, moneyDeadMessage, healthMessage } from "./results-messages.js";
import { getUser, renderStatsHeader } from "../utils.js";

const user = getUser();

function getUserLives(user){
  if (user.lives <= 0) return 'dead';
  if (user.lives >= 1) return 'unhealthy';
  return 'dead';
}

function getUserMoney(user){
  if (user.money < -49000) return 'debt';
  if (user.money < 100) return 'poor';
  if (user.money >= 100) return 'modest';
  return 'rich';
}

const userLives = getUserLives(user);
const userMoney = getUserMoney(user);

const livesResult = healthMessage[userLives];

const moneyResult = userLives === 'dead'
  ? moneyDeadMessage[userMoney]
  : moneyAliveMessage[userMoney];

renderResults();
renderStatsHeader();


/// HTML rendering

function renderResults() {
  const mainEl = document.querySelector('main');
  const resultDiv = document.createElement('div');
  const resultEl = document.createElement('p');
  const button = document.createElement('button');

  console.log(resultDiv, resultEl, button)

  button.textContent = 'Play Again'
  resultEl.textContent = `${livesResult} ${moneyResult}`

  button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
  });

  mainEl.append(resultDiv);
  resultDiv.append(resultEl, button);
}