const CHANGE_TYPE = {
    UP: "UP",
    DOWN: "DOWN",
};
const ERROR_TYPE = {
    NOT_FOUND: "NOT_FOUND",
    NOT_POSSIBLE: "NOT_POSSIBLE",
    INVALID_INPUT: "INVALID_INPUT",
};
let numbers = [4, 6, 10, 23, 0, 24, 30, 2];

// Your code here...

document.addEventListener("DOMContentLoaded", function() {
    let numContainer = document.getElementById('numbers-container')

    numbers.map((num) => {
        let newSpan = document.createElement('span');
        numContainer.appendChild(newSpan);
        newSpan.innerHTML = num;
    })
});