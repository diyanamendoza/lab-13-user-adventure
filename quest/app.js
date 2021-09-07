import questData from '../quest-data.js'
import { findById, setUser, renderStatsHeader, getUser, updateMoney, updateLives } from '../utils.js'

const data = new URLSearchParams(window.location.search);

const questId = data.get('id')





const userStats = getUser();
userStats.completed[questId] = true;
setUser(userStats);


console.log(userStats.completed['rock-climbing'])



const questObj = findById(questData, questId);

const questImage = document.createElement('img')
questImage.src = `../assets/${questObj.image}`;

const description = document.createElement('p');
description.textContent = questObj.description;

const form = document.createElement('form');


for (let choice of questObj.choices) {
  const currentChoice = document.createElement('p');
  currentChoice.textContent = choice.description;
  
  const radioButton = document.createElement('input')
  radioButton.type = 'radio';
  radioButton.name = 'choice';
  radioButton.value = choice.id;

  const label = document.createElement('label');
  label.append(currentChoice, radioButton)
  form.append(label);
}

const submitButton = document.createElement('button');
submitButton.textContent = "Choose";
form.append(submitButton);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  // This is how we'll change the money and lives, with userSelection
  const userSelection = formData.get('choice');


  const resultEl = document.createElement('p');
  const resultChoice = findById(questObj.choices, userSelection)
  resultEl.textContent = resultChoice.result;
  questDiv.append(resultEl);

  updateMoney(resultChoice.money);
  updateLives(resultChoice.lives);
  
  const returnButton = document.createElement('button')
  //Change return button to 'go to results' button
  if (userStats.completed['rock-climbing'] && userStats.completed.hiking && userStats.completed.baking) {
    returnButton.textContent = 'See your fate!'
  } else {
    returnButton.textContent = 'Return to Map';
  }
  

  returnButton.addEventListener('click', () => {
    //If all quests have been completed, this will redirect to the results page
    
    if (userStats.completed['rock-climbing'] && userStats.completed.hiking && userStats.completed.baking) {
      window.location = '../results';
    } else {
    window.location = '../choose-adventure';
    }
  })
  questDiv.append(returnButton);
  


  //Hide the choices and button
  
  form.style.display = 'none';

  

})

const questDiv = document.getElementById('quest-div')
questDiv.append(questImage);
questDiv.append(description);
questDiv.append(form);



renderStatsHeader();