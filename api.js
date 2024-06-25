

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';


export async function searchPokemon(pokemonNameOrId) {
    const apiUrl = `${BASE_URL}${pokemonNameOrId.toLowerCase().trim()}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Pokémon not found!');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        throw error;
    }
}


export async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;

    try {
        const response = await fetch(`${BASE_URL}${randomId}`);
        if (!response.ok) {
            throw new Error('Pokémon not found!');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        throw error;
    }
}