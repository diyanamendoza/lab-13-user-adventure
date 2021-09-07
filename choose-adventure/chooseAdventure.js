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
    climbLink.classList.remove('before');
    climbLink.classList.add('after');
}

if (userStats.completed.baking) {
    bakeLink.href = '';
    bakeLink.classList.remove('before');
    bakeLink.classList.add('after');
}

if (userStats.completed.hiking) {
    hikeLink.href = '';
    hikeLink.classList.remove('before');
    hikeLink.classList.add('after');
}