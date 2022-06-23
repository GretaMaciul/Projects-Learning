const password = prompt("Please enter password");

if (password.indexOf(' ') === -1) {
    console.log("Well done for no spaces")
}
else {
    console.log("Booo! Spaces icky")
}
