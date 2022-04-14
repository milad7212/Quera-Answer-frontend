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
    let numContainer = document.getElementById("numbers-container");

    numbers.map((num) => {
        let newSpan = document.createElement("span");
        numContainer.appendChild(newSpan);
        newSpan.innerHTML = num;
    });
});

document.getElementById("submit-btn").addEventListener("click", clickBtn);



function clickBtn() {
    let itemInput = document.getElementById("item-input");
    let countInput = document.getElementById("count-input");
    let errorContainer = document.getElementById("error-container");

    let isUp = document.querySelector('input[value="UP"]');
    console.log("isUp :>> ", isUp.checked);
    if (itemInput.value == "" || countInput.value == "") {
        let errorInvalid = `<p id='error'>INVALID_INPUT</p>`;
        errorContainer.innerHTML = errorInvalid;
        return;
    }
    let find = numbers.findIndex((e) => e == itemInput.value);
    if (find == -1) {
        let errorInvalid = `<p id='error'> NOT_FOUND</p>`;
        errorContainer.innerHTML = errorInvalid;
        return;
    }
    let fromIndex = numbers.findIndex((e) => e == itemInput.value);
    let toIndex = 0;
    if (isUp.checked) {
        toIndex = fromIndex + countInput.value;
        if (toIndex > numbers.length - 1 || toIndex < 0) {
            // NOT_POSSIBLE
            let errorInvalid = `<p id='error'> NOT_POSSIBLE</p>`;
            errorContainer.innerHTML = errorInvalid;
            return;
        }
    } else {
        toIndex = fromIndex + countInput.value;
    }

    let element = +itemInput.value;
    numbers.splice(fromIndex, 1);
    numbers.splice(toIndex, 0, element);

    let numContainer = document.getElementById("numbers-container");
    numContainer.innerHTML = null
    numbers.map((num) => {
        let newSpan = document.createElement("span");
        numContainer.appendChild(newSpan);
        newSpan.innerHTML = num;
    });
    console.log(numbers);
}