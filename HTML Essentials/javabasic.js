console.log("Hello! I'm not sure what I am doing")

if (1 + 1 === 2) {
    console.log("Doing math")
}

let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5!")
    console.log(random);
}

else {
    console.log("Your number is greater than or equal to 0.5!")
}

const dayOfWeek = prompt('Enter day of the week').toLowerCase();

if (dayOfWeek === 'Monday') {
    console.log("I hate Mondays")
}
else if (dayOfWeek === 'Saturday') {
    console.log("I love Saturdays")
}

else {
    console.log("Meh, it's okay I guess")
}