"use strict";

// getElement()
const getElement = selector => document.querySelector(selector);

// getElements()
const getElements = selector => document.querySelectorAll(selector);

// Function to swap the first two movie titles
const swapFirstTwo = () => {
    const movieTitles = getElements("#movie-title");

    if (movieTitles.length >= 2) {
        const temp = movieTitles[0].textContent;
        movieTitles[0].textContent = movieTitles[1].textContent;
        movieTitles[1].textContent = temp;
    }
};

// Function to swap the last two movie titles
const swapLastTwo = () => {
    const movieTitles = getElements("#movie-title");

    if (movieTitles.length >= 3) {
        const temp = movieTitles[1].textContent;
        movieTitles[1].textContent = movieTitles[2].textContent;
        movieTitles[2].textContent = temp;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#top_btn").addEventListener("click", swapFirstTwo);
    getElement("#down_btn").addEventListener("click", swapFirstTwo);

    getElement("#bottom_btn").addEventListener("click", swapLastTwo);
    getElement("#up_btn").addEventListener("click", swapLastTwo);
});
