//import Pokedex from "pokedex-promise-v2";

const { response } = require("express");
const fetch = require("node-fetch");

//const P = new Pokedex();
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generarPokemon()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(151)}`)
    .then(response => response.json())
    .then(data => data);
}
/*const allPokemon = [
    {
        id: 1,
        name: bulbasaur,
        type: plant,
        attaks:
            [
                placaje = {
                    potencia: 40,
                    PP: 35,
                    att_type: normal,
                },
                latigo_cepa = {
                    potencia: 45,
                    PP: 25,
                    att_type: plant,
                },        
            ],
        deffense: 20,
        velocity: 15,  
        frontimg:lkkk,
    },
    {
        id: 4,
        name: charmander,
        type: fire,
        attaks:
            [
                placaje = {
                    potencia: 40,
                    PP: 35,
                    att_type: normal,
                },
                ascuas = {
                    potencia: 45,
                    PP: 25,
                    att_type: fire,
                },        
            ],
        deffense: 20,
        velocity: 15,
    }
]*/
module.exports = 
{generarPokemon} 