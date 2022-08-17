const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("I have been clicked");
    alert("You clicked me too!");
};

btn.onmouseenter = function () {
    console.log("clicked!");
};

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("Oh no, I have been clicked");
})