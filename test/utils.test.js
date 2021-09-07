// IMPORT MODULES under test here:
import quests from "../quest-data.js";
import { findById, setUser, getUser, updateMoney } from "../utils.js";


const test = QUnit.test;

test('setUser should take in a user object, and update the object in local storage', (expect) => {

    const expected = {
        username: 'K',
        usertype: 'userType',
        hp: 0,
        gold: 0,
        completed: {}
    };
    
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
    expect.deepEqual(actual, expected);
});

test('getUser should take a string from local storage and return the parsed object', (expect) => {
    const expected = [{
        username: 'K',
        usertype: 'userType',
        hp: 0,
        gold: 0,
        completed: {}
    }];

    const expectedStringy = JSON.stringify(expected);

    localStorage.setItem('USER INFO', expectedStringy);

    const actual = getUser();

    expect.deepEqual(actual, expected);
});


test('findById should take in an id and return the correct product object data from the specified array of objects', (expect) => {

    const expected = {
        id: 'hiking',
        title: 'A Golden Treasure',
        map: {
            top: '31%',
            left: '5%'
        },
        image: 'waterfall.jpg',
        description: `You've hiked eight miles through lush forest and come upon a beautiful, multi-tiered waterfall. You love waterfalls, and this is one of the prettiest you've ever seen.`,
        choices: [{
            id: 'hike',
            description: `You quietly admire the waterfall and spot a trail to the side that leads upwards towards the top. Looks a bit dangerous, but there's gotta be a great view up there. You take the trail.`,
            result: 'You encounter another hiker struggling with a panic attack along the steep trail and help them out. They are so grateful that they insist on giving you money for a nice dinner. As anticipated, the view at the top is lovely.',
            lives: 0,
            money: 50
        }, {
            id: 'selfie',
            description: `Pics or it didn't happen! You whip out your phone and take a round of selfies (#blessed!). You climb to the second tier of the waterfall so you can get a particularly epic shot.`,
            result: 'As you lean out to get the selfie you wanted at the second tier, you lose your footing on the slippery rocks. You fall 30 feet, your body slamming into rocks at the bottom. The pain is blinding, and you notice broken ribs protruding from your torso. Your phone is nowhere to be found. The airlift and medical fees that follow bury you in debt.',
            lives: 0,
            money: -50000
        }, {
            id: 'music',
            description: `You decide this moment would be even better with some music. You take out your bluetooth speaker, max out the volume, and start blasting "Waterfalls" by TLC.`,
            result: `Little did you know, but the zombie apocalypse began during your hike. You and all of the hikers around you would have had a bit longer to live, but the nearest zombies hear your music and come running through the forest. Your music is so loud you don't realize the zombies are there until multiple tear pieces of your body from you. "Hotel California" plays as the zombies dig into your stomach and you bleed out.`,
            lives: -1,
            money: 0
        }]
    };

    const actual = findById(quests, 'hiking');

    expect.deepEqual(actual, expected);
});


// test('should add or subtract the user choice money from the money property of the user object', (expect) => {

//     let userBeforeChoice = {
//         username: 'k',
//         money: 100,
//       };

    
    
//     const userSelection = {
//         id: 'walk',
//         description: 'Go for a walk to think it through',
//         result: `
//             You do your best thinking on walks - you put in your headphones, put on your favorite synth album and get to walking. 
//             You turn a corner, and run into a friend! As you get closer, you realize this is the friend who traded you the sourdough starter when they needed to borrow some money a few months back. 
//             After some polite small talk, and they repay the loan, you tell them the problem you've run into. They look at you sweetly and put a hand on your shoulder, "I'd bet your recipe doesn't even call for eggs...". 
//             You RUN home to find they were right! 
//             Your loaves come out of the oven puffy, and with the perfect crumb. They're such a hit that you're able to use the repaid loan to start a successful bakery.
//         `,
//         lives: 0,
//         money: 10000
//     };

//     const userAfterChoice = {
//             username: 'k',
//             money: userSelection.money =+ userBeforeChoice.money,
//         };

//     // let finalMoney = updateMoney(userSelection.money);    

//     expect.deepEqual(userBeforeChoice, userAfterChoice);
// });
