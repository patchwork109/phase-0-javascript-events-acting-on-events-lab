// Grab and declare the 'dodger' element
const dodger = document.querySelector('#dodger');

// Updates to the style
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "175px";

// Function that describes the left movement
const moveDodgerLeft = function () {
    const leftNumbers = dodger.style.left.replace("px", " ");
    const left = parseInt(leftNumbers, 10);
    // Ensures that dodger remains in the game field
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

// Event handling for the left AND right arrow keydowns
document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

// Function that describes the right movement
const moveDodgerRight = function() {
    const rightNumbers = dodger.style.left.replace("px", " ");
    const left = parseInt(rightNumbers, 10);
    // Ensures that dodger remains in the game field
    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
    }
}