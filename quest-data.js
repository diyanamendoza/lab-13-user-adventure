// quests[0].choices[0].description; ==> 'negotiate with them'


const rockClimbing = {
    id: 'rock-climbing',

    title: 'To climb or not to climb',
    image: 'rock-climber.jpeg',
    description: `
        You stare up at the cliff. It's way more difficult a climb than anything
        you've ever attempted.
    `,
    choices: [{
        id: 'climb',
        description: 'Climb!',
        result: `
            You climb like you never have in your life. You almost fall and die
            a few times but you make it to the top. Unfortunately your wallet
            fell out on a hard move and a little punk kid ran away with it. 
        `,
        lives: 0,
        money: -100
    }, {
        id: 'another',
        description: 'Find another climb!',
        result: `
            You know your limits and looks for another place to climb. You find it,
            but it's not very challenging. You are kinda bored, but you find another
            climber's wallet stuck between some rocks. You keep the $100 and return
            the wallet like a good citizen.
        `,
        lives: 0,
        money: 100
    }, {
        id: 'run',
        description: 'Go home and watch netflix',
        result: `
            You decide to play it safe and go home. The ghost of death has
            not been satisfied by your cowardice and causes your vehicle to
            crash into a preschool. You die, and everybody curses your name.
        `,
        lives: -1,
        money: 0
    }]
};

const baking = {
    id: 'baking',
    title: 'the greatest bake',
    image: 'sourdough.jpg',
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

const quests = [
    rockClimbing, 
    baking,
    hiking,
];

export default quests;