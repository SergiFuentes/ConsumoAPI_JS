const url = 'https;//pokeapi.co/api/v2/pokemon/?offset=0&limit20';

fetch( url )
    .then( ( response ) => response.json() )
    .then( ( data ) =>
    {
        let pokeURL;
        let array = data.results;
        console.log( data );
        console.log( data.results[ 0 ] );

        for ( let i = 0; i < array.lenght; i++ )
        {
            pokeURL = data.results[ i ].url
            console.log( pokeURL );
            fetch( pokeURL )
                .then( ( responsePoke ) => responsePoke.json() )
                .then( ( dataPoke ) =>
                {
                    let sprite;
                    let namePoke;
                    let abilityPoke = [];
                    let localizacion = document.getElementById( 'pokeDEX' );

                    sprite = dataPoke.sprites.front_default;
                    console.log( sprite );

                    namePoke = dataPoke.name;
                    console.log( namePoke );

                    dataPoke.abilities.forEach( abilityObj => { abilityPoke.push( abilityObj.ability.name ) } );

                    console.log( abilityPoke );

                    localizacion.innerHTML += `
                        <div class="col">
                        <div class="card" style="width:18rem">
                            <img src="${sprite }" class="card-img-top" alt="sprite ${ namePoke}"/>
                            <div class="card-body">
                            <h5 class="card-title">${namePoke}</h5>
                            <p id="habilidades" class="card-text">
                            |
                            ${abilityPoke[ 0 ]}
                            |
                            ${abilityPoke[ 1 ]}
                            |
                            ${abilityPoke[ 2 ]}
                            </p>
                            <a target="_blank" href="https://www.pokemon.com/es/pokedex/${namePoke}" class="btn btn-primary">Go Pokedex</a>
                            </div>
                        </div>
                        </div>`
                   

                })
        }
    })