import choiceData from '..quest-data.js';
import { getUser } from '../utils.js';

const user = getUser();

for (choice of choices) {
    
    let linkDisplay = null;
    const completedChoice = user.completed[choice.id];

    if(completedChoice) {
        linkDisplay
    }

}