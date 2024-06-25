window.onload = function() {
    promptName();
};

function promptName() {
    const firstName = prompt("Please enter your first name:");

    if (firstName) {
   
        const welcomeMessage = `Welcome, ${firstName}! Look up your favorite pokemon!`;
        document.querySelector('h1').textContent = welcomeMessage;
    } else {
        alert("You did not enter a name. Please try again.");
    }
}



const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonInput = document.getElementById('pokemonInput');
const searchButton = document.getElementById('searchButton');
const pokemonData = document.getElementById('pokemonData');


async function searchPokemon() {
    const pokemonNameOrId = pokemonInput.value.toLowerCase().trim();
    const apiUrl = `${BASE_URL}${pokemonNameOrId}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Pokémon not found!');
        }
        const pokemon = await response.json();
        displayPokemonData(pokemon);
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        alert('Pokémon not found! Please enter a valid name or ID.');
    }
}


function displayPokemonData(pokemon) {
    pokemonData.innerHTML = `
        <p><strong>Name:</strong> ${pokemon.name}</p>
        <p><strong>Height:</strong> ${pokemon.height}</p>
        <p><strong>Weight:</strong> ${pokemon.weight}</p>
        <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
}


searchButton.addEventListener('click', searchPokemon);


function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; // Generate a random ID between 1 and 898

    fetch(`${BASE_URL}${randomId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found!');
            }
            return response.json();
        })
        .then(pokemon => {
            displayPokemonData(pokemon);
        })
        .catch(error => {
            console.error('Error fetching Pokémon:', error);
            alert('Failed to fetch Pokémon. Please try again.');
        });
}

function displayPokemonData(pokemon) {
    const pokemonData = document.getElementById('pokemonData');
    pokemonData.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
    `;
}
