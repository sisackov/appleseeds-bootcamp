function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

let pokemonList = [];
pokemonList.push(
    new Pokemon('Pikachu', 'electric', ['Thunder Shock', 'Quick Attack'])
);
pokemonList.push(
    new Pokemon('Bulbasaur', 'grass', ['Vine Whip', 'Razor Leaf'])
);
pokemonList.push(new Pokemon('Charmander', 'fire', ['Ember', 'Scratch']));

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
};

pokemonList.forEach((pokemon) => {
    pokemon.callPokemon();
    pokemon.attack(1);
});
