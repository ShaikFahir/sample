// The asynchronous code from the Canvas
function playGame() {
    // 1. Ask the question. This does NOT pause the program.
    rl.question('Enter your guess: ', (answer) => {
        // 2. This part (the "callback") ONLY runs AFTER
        //    the user has typed something and pressed Enter.
        const userGuess = parseInt(answer);
        // ... all the game logic goes inside here ...
    });
}