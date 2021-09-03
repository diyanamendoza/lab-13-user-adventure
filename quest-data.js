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
    title: '',
    image: '',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        lives: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        lives: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        lives: 0,
        gold: 90
    }]
};

const hiking = {
    id: 'hiking',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'waterfall.jpeg',
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
        result: 'As you lean out to get the selfie you wanted at the second tier, you lose your footing on the slippery rocks. You fall 30 feet, your body slamming into rocks at the bottom. The pain is blinding, and you notice broken ribs protruding from your torso. Your phone is nowhere to be found.',
        lives: 0,
        money: -5000
    }, {
        id: 'music',
        description: `You decide this moment would be even better with some music. You take out your bluetooth speaker, max out the volume, and start blasting "Waterfalls" by TLC.`,
        result: `Little did you know, but the zombie apocalypse began during your hike. You and all of the hikers around you would have had a bit longer to live, but the nearest zombies hear your music and come running through the forest. Your music is so loud you don't realize the zombies are there until multiple tear pieces of your body from you.`,
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