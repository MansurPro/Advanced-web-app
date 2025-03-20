"use strict";

const movies = [
    "The Godfather (1972)", "The Shawshank Redemption (1994)", 
    "Schindler's List (1993)", "Raging Bull (1980)", "Casablanca (1942)", 
    "Citizen Kane (1941)", "Gone with the Wind (1939)", "The Wizard of Oz (1939)", 
    "One Flew Over the Cuckoo's Nest (1975)", "Lawrence of Arabia (1962)", 
    "Psycho (1960)", "Forrest Gump (1994)", "The Silence of the Lambs (1991)", 
    "It's a Wonderful Life (1946)", "Apocalypse Now (1979)", "Pulp Fiction (1994)", 
    "The Lord of the Rings: The Return of the King (2003)", "Schindler's List (1993)", 
    "Star Wars: Episode V - The Empire Strikes Back (1980)", "12 Angry Men (1957)"
];

// Function to list all movies
const listMovies = () => {
    const message = movies.join(" | ");
    document.querySelector("#message").textContent = message;
};

// Function to search for movies
const searchMovies = () => {
    const searchTerm = document.querySelector("#search_term").value.toLowerCase();
    const selectedMovies = movies.filter(movie => movie.toLowerCase().includes(searchTerm));

    // Display the selected movies or a no results message
    if (selectedMovies.length > 0) {
        document.querySelector("#message").textContent = selectedMovies.join(" | ");
    } else {
        document.querySelector("#message").textContent = "No movies found.";
    }
};

// Add event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Attach listMovies to List Movies button
    document.querySelector("#list").addEventListener("click", listMovies);

    // Attach searchMovies to Search button
    document.querySelector("#search").addEventListener("click", searchMovies);
});
