import { moneyAliveMessage, moneyDeadMessage, healthMessage } from "./results-messages.js";
import { getUser } from "../utils.js";

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

  alert(livesResult, moneyResult);