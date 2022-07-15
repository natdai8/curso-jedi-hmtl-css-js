let id = 1;
let pkmns = [];
const url = 'https://curso-jedi-web.herokuapp.com/pokemons';

const load = pokemon => {                                   // función llamada x que le paso de parámetro un obj pokemon
    if (!pokemon) return;                                   

    // var regular = pokemon.images[0];
    // var shiny = pokemon.images[1];
    var [ regular, shiny ] = pokemon.images;

    // var pkm_types = [];
    // for(let i = 0; i<pokemon.types.length; i++){
    //   pkm_types.push( pokemon.types[i].type.name ); 
    // }

    var pkm_types = pokemon.types.map( ({ type }) => type.name);

    // let HM;
    // if(pokemon.moves.HM !== null) 
    //     HM = pokemon.moves.HM;
    // else 
    //     HM = 'null';

    $('#api-data').replaceWith(                                             // en html el row id = api-data
        `<tr id="api-data">
            <th scope="row" class="center">${pokemon.num}</th>
            <td class="center sprite">
                <img src="${regular.front}" alt="${pokemon.name}">
            </td>
            <td class="center sprite">
                <img src="${shiny.front_shiny}" alt="${pokemon.name}">
            </td>
            <td class="center">${pokemon.name}</td>
            <td class="center"> ${ pkm_types.join(' & ') } </td>
            <td class="center"> ${ pokemon.moves.HM || 'None' } </td>     
        </tr>`
    );

    id = pokemon.id;
};

$(window).on("load",  async () => {
    try {
        pkmns = (await axios.get(`${url}`)).data;                               // se carga todo de una
        load( pkmns[0] );
    } catch (error) {
        console.log(error)
    }

    $('#previous').on("click", async () => {
        if (id > 1) --id;
        else if (id === 1) id = 6;
        load( pkmns.find(poke => poke.id === id) );
    });

    $('#send-search').on("click", async () => {
        var inputVal = $('#search').val();
        if(isNaN(inputVal)) load(pkmns.find(poke => poke.name === inputVal));
        else load(pkmns.find(poke => poke.num === parseInt(inputVal)));
    });

    $('#next').on("click", async () => {
        if (id < 6) ++id;
        else if (id === 6) id = 1;
        load( pkmns.find(poke => poke.id === id) );
    });
});
