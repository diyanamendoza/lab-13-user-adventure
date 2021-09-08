import { moneyAliveMessage, moneyDeadMessage, healthMessage } from "./results-messages.js";
import { getUser, renderStatsHeader } from "../utils.js";

const user = getUser();

function getUserLives(user){
  if (user.lives <= 0) return 'dead';
  if (user.lives <= 2) return 'unhealthy';
  return 'healthy';
}

function getUserMoney(user){
  if (user.money < -49000) return 'debt';
  if (user.money < 100) return 'poor';
  if (user.money < 9000) return 'modest';
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
  const livesResultImg = document.createElement('img');
  const moneyResultImg = document.createElement('img');
  const resultEl = document.createElement('p');
  const button = document.createElement('button');

  if (getUserMoney === 'debt'){
    moneyResultImg.src = './results/results-assests/debt.jpeg' }
  if (getUserMoney === 'poor'){
    moneyResultImg.src = './results/results-assests/poor.jpeg' }
  if (getUserMoney === 'modest'){
    moneyResultImg.src = './results/results-assests/modest.jpeg' }
  if (getUserMoney === 'rich'){
    moneyResultImg.src = './results/results-assests/loaded.jpeg' }
  if (getUserLives === 'dead'){
    livesResultImg.src = './results/results-assests/cemetery.jpeg' }
  if (getUserLives === 'unhealthy'){
    livesResultImg.src = './results/results-assests/hospital-bed.jpeg' }
  else {
    livesResultImg.src = './results/results-assests/summited.jpeg'
  }


  resultDiv.classList.add('result-div');
  resultEl.classList.add('result-text');
  button.classList.add('play-again-button');

  
  button.textContent = 'Play Again';
  resultEl.textContent = `${livesResult} ${moneyResult}`;


  button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
  });

  mainEl.append(resultDiv);
  resultDiv.append(livesResultImg, moneyResultImg, resultEl, button);
}