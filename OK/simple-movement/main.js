let sq = document.getElementById("square");
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
        console.log(e.shiftKey);
        if (e.shiftKey) {
            sq.style.top = sq.getBoundingClientRect().y - 10 + "px";
        } else {
            sq.style.top = sq.getBoundingClientRect().y - 1 + "px";
        }

        // up arrow
    } else if (e.keyCode == "40") {
        if (e.shiftKey) {
            sq.style.top = sq.getBoundingClientRect().y + 10 + "px";
        } else {
            sq.style.top = sq.getBoundingClientRect().y + 1 + "px";
        }

        // down arrow
    } else if (e.keyCode == "37") {
        if (e.shiftKey) {
            sq.style.left = sq.getBoundingClientRect().x - 10 + "px";
        } else {
            sq.style.left = sq.getBoundingClientRect().x - 1 + "px";
        }

        // left arrow
    } else if (e.keyCode == "39") {
        if (e.shiftKey) {
            sq.style.left = sq.getBoundingClientRect().x + 10 + "px";
        } else {
            sq.style.left = sq.getBoundingClientRect().x + 1 + "px";
        }

        // right arrow
    }
}
document.addEventListener("", (event) => {
    const elementToMove = document.getElementById("square");
    var keyName = event.key;
    console.log("keyName", event);
    if (keyName == 38) {
        elementToMove.style.top =
            parseInt(elementToMove.style.top || 0) + 100 + "px";
    }
});