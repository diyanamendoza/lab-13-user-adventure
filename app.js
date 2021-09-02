const nextButton = document.querySelector('button');

nextButton.addEventListener('submit', function (event){
  event.preventDefault();

  // create form data object
  const userData = document.getElementById('userForm');
  // userData creates user object
  createUser(userData);
  // 


})


