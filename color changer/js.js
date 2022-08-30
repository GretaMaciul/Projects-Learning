const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColour = makeRandomColour();
    document.body.style.backgroundColor = newColour;
    h1.innerText = newColour;
})

const makeRandomColour = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if ((r + g + b) < 200) {
        h1.style.color = 'white';
    };
    return `rgb(${r},${g}, ${b})`;
};

