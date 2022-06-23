let maximum = parseInt(prompt("Enter max number/difficulty setting"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'quit') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    }
    else {
        guess = prompt("Too low! Enter a new guess");
    }
}
if (guess === 'quit') {
    console.log("Booo! You quit")
}
else {
    console.log(`Correct! It took you ${attempts} guesses`)
}