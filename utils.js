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
    const parsedUser = JASON.parse(stringedUser);
    if (!stringedUser) { return [];}
    return parsedUser;
}

export function createUser(userData) {
    const user = {
      username: FormData.get('username'),
      usertype: FormData.get('usertype'),
      hp: 0,
      gold: 0,
      completed: {}
    };
    return user; 
  }