"use strict"

const image_elements = ["images/bison.jpg","images/deer.jpg","images/hero.jpg","images/release.jpg"]

// code the get element function
const getElement = selector => document.querySelector(selector);
const getElements = selector => document.querySelectorAll(selector);

// Function to update the displayed images
const updateImages = () => {
    const imgElements = getElements(".row img"); // Get all image elements
    for (let i = 0; i < imgElements.length; i++) {
        imgElements[i].src = image_elements[i]; // Update image sources
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // get the elements from the DOM
    updateImages();

    // click event listener for the Left button
    getElement("#left_button").addEventListener("click", () => {
        // Shift the first item to the end of the array
        const firstImage = image_elements.shift(); 
        image_elements.push(firstImage); 

        // Update the images
        updateImages();
    });

    // click event listener for the Right button
    getElement("#right_button").addEventListener("click", () => {
        // Shift the last item to the beginning of the array
        const lastImage = image_elements.pop();
        image_elements.unshift(lastImage);

        // Update the images
        updateImages();
    });
})