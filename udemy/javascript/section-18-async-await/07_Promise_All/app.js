// This was the original version with single promises
async function get3PokemonParallel() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;
	printPokemon([poke1, poke2, poke3]);
}

get3PokemonParallel();

// PARALLEL REQUESTS!
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	const results = await Promise.all([prom1, prom2, prom3]);
	printPokemon(results);
}

function printPokemon(results) {
	for (let pokemon of results) {
		console.log(pokemon.data.name);
	}
}

get3Pokemon();
