import questData from '../quest-data.js'
import { findById } from '../utils.js'



const data = new URLSearchParams(window.location.search);

const questId = data.get('id')

const questObj = findById(questData, questId);

const questImage = document.createElement('img')
questImage.src = `../assets/${questObj.image}`;

const description = document.createElement('p');
description.textContent = questObj.description;




const questDiv = document.getElementById('quest-div')
questDiv.append(questImage);
questDiv.append(description);
