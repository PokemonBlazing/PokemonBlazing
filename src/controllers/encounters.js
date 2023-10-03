//import Pokedex from "pokedex-promise-v2";

const { res } = require("express");
const fetch = require("node-fetch");

//const P = new Pokedex();
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function generarPokemon()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(res => res.json())
    .then(data => guardarPokemon(data))
};
function guardarPokemon(poke){
    const nombre = poke.name;
    const move1 = {
        name: "takle",
        power: 45,
        pp: 25,
        accuracy: 100
    };
    const move2 = {
        name: "vine whip",
        power: 45,
        pp: 25,
        accuracy: 100
    };
    const HP = 45;
    const deff = 49;
    const atk = 49;
}
module.exports = 
{generarPokemon} 