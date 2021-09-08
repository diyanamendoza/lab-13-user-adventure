const userInfo = 'USER INFO';

export const findById = (someArray, someId) => {
    const foundObject = someArray.find(entry => entry.id === someId);
    return foundObject;
}

export function setUser(userObj){
    const stringedUser = JSON.stringify(userObj);
    localStorage.setItem(userInfo, stringedUser);
}

export function getUser(){
    const stringedUser = localStorage.getItem(userInfo);
    const parsedUser = JSON.parse(stringedUser);
    if (!stringedUser) { return [];}
    return parsedUser;
}

export function renderStatsHeader() {
    // get user stats from local storage
    const userStats = getUser();
    // grab header element
    const header = document.querySelector('header');
    // create div that will be appended to header, give it a class and id
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-stats');
    userDiv.setAttribute('id', 'user-stats');
    // add user specific content to the div
    userDiv.textContent = `${userStats.username} | Lives: ${userStats.lives} | Money: ${(userStats.money).toLocaleString('en-US',
    {style: 'currency', currency: 'USD'})}`;
    // append userDiv to header
    header.append(userDiv);
  }

export function updateMoney(choice) {
    let user = getUser()
    Number(user.money += choice);
    setUser(user);

}
export function updateLives(choice) {
    let user = getUser()
    Number(user.lives += choice);
    setUser(user);
  }

export function updateStatsHeader() {
    const statsHeader = document.getElementById('user-stats');
    const userStats = getUser();
    statsHeader.textContent = `${userStats.username} | Lives: ${userStats.lives} | Money: ${(userStats.money).toLocaleString('en-US',
    {style: 'currency', currency: 'USD'})}`;
}