
const pokeApi = {}

function convertPokemonToMyModel(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.id = pokeDetail.id;
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    /* pokemon.type = pokemon.type.get(0); */
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    
    return pokemon;
    
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokemonToMyModel)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)//Devolve uma promise, processamento assincrono: não tenho uma resposta imediáta.
    //converte o body/promise para json
        .then((response) => response.json())
        /* sucesso
        => arow function */
        
        //Forma alternativa
        /* response
            .json()
            .then(function (responseBody) {
                console.log(responseBody)
        }) */

        
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests => Promise.all(detailRequests)))
        /* .then((PokemonDetail) => console.log(PokemonDetail)) */
        .then((PokemonDetail) => PokemonDetail)
        
        

}










