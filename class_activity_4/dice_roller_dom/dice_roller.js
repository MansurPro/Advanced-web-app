"use strict";

// Function to roll a single die
const rollDie = (sides = 6) => {
    return Math.ceil(Math.random() * sides);
};

// Function to roll multiple dice
const rollDice = (numDice, sides) => {
    const dice = [];
    for (let i = 0; i < numDice; i++) {
        dice.push(rollDie(sides));
    }
    return dice;
};

// Event handler for Roll button
const rollButtonClick = () => {
    let sides = parseInt(document.querySelector("#sides").value);
    const numDice = parseInt(document.querySelector("#num_dice").value);

    // Check if sides is NaN, set default value of 6
    if (isNaN(sides) || sides < 1) {
        sides = 6;
        document.querySelector("#sides").value = 6; // Update input field
    }

    // Use rollDice() to get the values of the dice and then display them
    const dice = rollDice(numDice, sides);
    document.querySelector("#message").textContent = "Dice: " + dice.join(" ");
};

// Attach the event handler when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#message").textContent = "DOM is loaded and ready!";
    
    // Attach rollButtonClick as event handler for Roll button
    document.querySelector("#roll_button").addEventListener("click", rollButtonClick);
});
