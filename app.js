//Guardamos la URL donde están almacenados los pokemon. Esta URL la encontramos en google buscando API Pokemon

const URL = "https://pokeapi.co/api/v2/pokemon/";

//Creamos un contenedor vacío para la lista de Pokemon, para irlos metiendo

let listPokemon = [];

//Vamos a sincronizar


//Lanzamos la aplicación cuando se abra con esta función.
window.onload = () => {
    init();
};

//Con esta función vamos a recuperar los pokemons. Creamos getPokemons que la usaremos más adelante

const init = async () => {
    const pokemons = await getPokemons();
    //creamos la función de mapeo
    mappedPokemon(pokemons);
}


//Esta es la función que nos va a recuperar los pokemons. Los va a recuperar con el fetch

const getPokemons = async () => {

    //Hacemos un bucle para traernos los 151 pokemons
    //Por cada fetch que hago tengo que guardarlo en algún sitio, en el contenedor que he creado más arriba
    
    for(index=1; index<151; index++) {
        //atacamos a la URL para extraer los datos
        const pokemonApi = await fetch (`${URL}${index}`);
        
        //ahora me lo ha transformado en Json
        const convertoJson = await pokemonApi.json();
        //una vez me lo ha transfromado en Json lo guardo (push) en Json
        listPokemon.push(convertoJson);
    }
   console.log(listPokemon) 
}
//En este punto están metidos en la LISTA todos los pokemons

//Lanzamos la API cuando se cargue la ventana

//Una vez que tenemos todos los pokemons recuperados vamos a mapear


const mappedPokemon = () => {
    listPokemon.map((pokemon) => {
        
        return printPokemon ({
            nombre: pokemon.name, 
            imagen: pokemon.sprites.front_default,
            habilidad: "",
            peso: pokemon.weight,

        });
})}



//Construimos el HTML.
//Damos las órdenes de cómo deben imprimirse los Pokemon


const printPokemon = (pokemon) => {
        let pokemonContainer = document.querySelector('#pokemon-container')
        pokemonContainer.innerHTML += `
        <figure class="container">
            <div class="container2">
                <h2>${pokemon.nombre}</h2>
                <div class="imagen"><img src="${pokemon.imagen}" alt="${pokemon.nombre}"/></div>
                <h3>Mi <span>${pokemon.nombre}</span> pesa ${pokemon.peso} kgs</h3>                
            </div>
        </figure>
        ` 
}

