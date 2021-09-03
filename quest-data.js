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
    rockClimbing, 
    baking,
    hiking,
];

export default quests;