import choiceData from '../quest-data.js';
import { getUser } from '../utils.js';
import { renderStatsHeader } from '../utils.js';

renderStatsHeader();
const userStats = getUser();

const climbLink = document.getElementById('choiceID1');
const bakeLink = document.getElementById('choiceID2');
const hikeLink = document.getElementById('choiceID3');

if (userStats.completed['rock-climbing']) {
    climbLink.href = '';
    climbLink.style.textDecoration = "line-through";
}

if (userStats.completed.baking) {
    bakeLink.href = '';
    bakeLink.style.textDecoration = "line-through";

}

if (userStats.completed.hiking) {
    hikeLink.href = '';
    hikeLink.style.textDecoration = "line-through";

}