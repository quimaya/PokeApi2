f
const URL = "https://pokeapi.co/api/v2/pokemon/";
let ListaPokemon = []

window.onload = () => {
init();
}

const init = async () => {
const pokemons = await getPokemons();
mappedPokemon(pokemons);
}


const getPokemons = async () => {
    
    
    for(index=1; index<151; index++) {
        const pokemonApi = await fetch (`${URL}${index}`);
        
        const convertoJson = await pokemonApi.json();
        ListaPokemon.push(convertoJson);
    }
    
}

const mappedPokemon = () => {
    ListaPokemon.map((pokemon) => {
        
        return printPokemon ({nombre: pokemon.name, imagen: pokemon.sprites.other.dream_world.front_default,
        });
})}

const printPokemon = (pokemon) => {
    console.log(pokemon)
        let pokemonContainer = document.querySelector('#pokemonContainer')
        pokemonContainer.innerHTML += `
        <figure>
            <div>
                <h3>${pokemon.nombre}</h3>
                <img src="${pokemon.imagen}" alt="${pokemon.nombre}"/>
            </div>
        </figure>
        ` 
}

//tipo: pokemon.types.type.name
//<p>${pokemon.tipo}</p>