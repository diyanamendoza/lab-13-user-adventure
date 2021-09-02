// IMPORT MODULES under test here:
import quests from "../quest-data.js";
import { createUser, findById, setUser, getUser } from "../utils.js";


const test = QUnit.test;

test('setUser should take in a user object, and update the object in local storage', (expect) => {

    const user = {
        username: 'K',
        usertype: 'userType',
        hp: 0,
        gold: 0,
        completed: {}
    };
    setUser(user);

    const stringyUser = localStorage.getItem('USER INFO');
    const actual = JSON.parse(stringyUser);

    const expected = {
        username: 'K',
        usertype: 'userType',
        hp: 0,
        gold: 0,
        completed: {}
    };

    expect.deepEqual(actual, expected);
});

test('getUser should take in USER INFO from local storage, and return a parsed object', (expect) => {

    const userInfo = `[{\"username\":\"K\",\"usertype\":\"userType\",\"hp\":0,\"gold\":0,\"completed\":{}}]`;
    getUser(stringyUser);

    const stringyUser = JSON.stringify(userInfo)
    const actual = localStorage.getItem('USER INFO');

    const expected = {
        username: 'K',
        usertype: 'userType',
        hp: 0,
        gold: 0,
        completed: {}
    };

    expect.deepEqual(actual, expected);
});

test('findById should take in an id and return the correct product object data from the specified array of objects', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 'treasure',
        title: 'A Golden Treasure',
        map: {
            top: '31%',
            left: '5%'
        },
        prerequisites: ['dragon', 'monsters'],
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `As you enter the quest chamber you notice three chests before you. Just as you start to imagine the wealth, you see a giant serpent emerge from the back of the chamber. You'll need to make a run for it, but you have time to open one chest before you take off. Which one do you choose?`,
        choices: [{
            id: 'wooden',
            description: 'A Wooden Chest',
            result: 'You grab 40 gold pieces!',
            hp: 0,
            gold: 40
        }, {
            id: 'golden',
            description: 'A Golden Chest',
            result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
            hp: -50,
            gold: 0
        }, {
            id: 'jeweled',
            description: 'A Jeweled Chest',
            result: 'A warm light engulfs you and you gain 35 hp',
            hp: 35,
            gold: 0
        }]
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(quests, 'treasure');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
