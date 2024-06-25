// functions.js

// Function to prompt user for their name and update welcome message
export function promptName() {
    const firstName = prompt("Please enter your first name:");

    if (firstName) {
        const welcomeMessage = `Welcome, ${firstName}! Look up your favorite Pokémon!`;
        document.querySelector('h1').textContent = welcomeMessage;
    } else {
        alert("You did not enter a name. Please try again.");
    }
}

// Function to display Pokémon data on the webpage
export function displayPokemon(pokemon) {
    const pokemonData = document.getElementById('pokemonData');
    pokemonData.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
    `;
}

// Function to handle search button click event
export function setupSearchButton(searchPokemon) {
    const searchButton = document.getElementById('searchButton');
    const pokemonInput = document.getElementById('pokemonInput');

    searchButton.addEventListener('click', async () => {
        const pokemonNameOrId = pokemonInput.value;
        try {
            const pokemon = await searchPokemon(pokemonNameOrId);
            displayPokemon(pokemon);
        } catch (error) {
            console.error('Error:', error);
            alert('Pokémon not found! Please enter a valid name or ID.');
        }
    });
}
