import questData from '../quest-data.js'
import { findById } from '../utils.js'



const data = new URLSearchParams(window.location.search);

const questId = data.get('id')

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

  const label = document.createElement('label');
  label.append(currentChoice, radioButton)
  form.append(label);
}






const questDiv = document.getElementById('quest-div')
questDiv.append(questImage);
questDiv.append(description);
questDiv.append(form);
