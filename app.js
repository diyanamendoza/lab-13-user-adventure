import { setUser } from "./utils.js";

// const nextButton = document.querySelector('button');
const userForm = document.getElementById('userForm');


userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // create form data object
  const formData = new FormData(userForm);

  // userData creates user object
    const user = {
      username: formData.get('username'),
      // usertype: formData.get('usertype'),
      lives: 3,
      money: 100,
      completed: {}
    };
  // set user in local storage
  setUser(user);
  // take user to choose adventure page
  window.location = './choose-adventure/index.html';

});
