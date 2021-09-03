// quests[0].choices[0].description; ==> 'negotiate with them'


const rockClimbing = {
    id: 'rock-climbing',

    title: 'To climb or not to climb',
    image: 'monsters.jpg',
    description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

const baking = {
    id: 'baking',
    title: 'the greatest bake',
    image: '',
    description: `
        You've been feeding and caring for your sourdough starter for months. Waiting until its juuuuust ripe enough to bake into a perfectly warm, tangy, probiotic loaf. The dough has been made, and you're just waiting for it to finish it's first rise when SUDDENLY you realize ... you're out of eggs! 
        Do you...
    `,
    choices: [{
        id: 'ghost',
        description: 'Hold a seance to contact the ghost of Anthony Bourdain',
        result: `
            Anthony walks into the kitchen slowly, looks down at your recipe card and shakes his head.
            "Sourdough?" he says, "This recipe doesn't even call for eggs..."
            He walks back into the ether, but not before grabbing a $20 off your counter for his time.
            You are eternally ashamed, and lose 20 gold BUT you bake your loaf, and live to see another day. 
        `,
        lives: 0,
        gold: -20
    }, {
        id: 'walk',
        description: 'Go for a walk to think it through',
        result: `
            You do your best thinking on walks - you put in your headphones, put on your favorite synth album and get to walking. 
            You turn a corner, and run into a friend! As you get closer, you realize this is the friend who traded you the sourdough starter when they needed to borrow some money a few months back. 
            After some polite small talk, and they repay the loan, you tell them the problem you've run into. They look at you sweetly and put a hand on your shoulder, "I'd bet your recipe doesn't even call for eggs...". 
            You RUN home to find they were right! 
            Your loaves come out of the oven puffy, and with the perfect crumb. They're such a hit that you're able to use the repaid loan to start a successful bakery.
        `,
        lives: 0,
        gold: 10000
    }, {
        id: 'store',
        description: 'Frantically grab your bag, and run to the store',
        result: `
            You leave in such a hurry - you have to make it back before the loaves finish their rise! 
            Your mind is so focused on the eggs that you don't realize you're still holding your kitchen scissors.
            While running FULL SPRINT, you trip on the newly placed gravel pathway and perish.
            Your last thought is ... did the recipe even call for eggs?
        `,
        lives: -1,
        gold: 0
    }]
};

const hiking = {
    id: 'hiking',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
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

const quests = [
    rock-climbing, 
    baking,
    hiking,
];

export default quests;