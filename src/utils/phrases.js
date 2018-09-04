const phrases = [
    'Hello, sunshine!',
    'Howdy, partner!',
    'Hey, howdy, hi!',
    'What’s kickin’, little chicken?',
    'Peek-a-boo!',
    'Howdy-doody!',
    'Hey there, freshman!',
    'Hi, mister!',
    'I come in peace!',
    'Put that cookie down!',
    'Ahoy, matey!',
    'Hiya!'
];
export function randomizeGreeting() {
    return phrases[Math.floor(Math.random() * phrases.length)]
}