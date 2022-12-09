/* const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; */
const pokemonList = document.getElementById('pokemonList');
const LoadMoreButton = document.getElementById('LoadMoreButton');
const limit = 20;
let offset = 0;
let maxRecords = 159;


function convertPokemonTypesToLi(PokemonTypes) {
    return PokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function ConvertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.id}#</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}"></img>
                </div>
            </li>`
        
}
{/* <img src="/assets/${pokemon.name}.png" alt='${pokemon.name}'></img> */}


function LoadMore(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        //usando map
        const newList = pokemons.map((pokemon) => ConvertPokemonToLi(pokemon));
        const newHtml = newList.join('');
        pokemonList.innerHTML += newHtml;
        
    })
}

//Chamando na primeira vez.
LoadMore(offset, limit);



LoadMoreButton.addEventListener('click', () => {
    offset += limit;
    /* LoadMore(offset,limit) */

    //limitando
    const qtdRecordNextPage = offset + limit;
    
    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        LoadMore(offset, newLimit)

        LoadMoreButton.parentElement.removeChild(LoadMoreButton)
    } else {
        LoadMore(offset, limit)
    }
 

})





    

    //forma simplificada
    /* pokemonList.innerHTML += pokemons.map(ConvertPokemonToLi).join(''); */


    //Concatenando o valor da direita ao html da esquerda.
    /*  for (let i = 0; i < pokemons.length; i++){
        const pokemon = pokemons[i];
        pokemonList.innerHTML += ConvertPokemonToLi(pokemon);
    } */

    //convertendo uma lista de objetos em uma lista html.
    /* const listItems = []

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(ConvertPokemonToLi(pokemon));
    }

    console.log(listItems); */
    
