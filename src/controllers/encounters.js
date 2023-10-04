//import Pokedex from "pokedex-promise-v2";

const { res } = require("express");
const fetch = require("node-fetch");

function generarPokemon(){
    let poke1= {
        name: "bulbasaur",
        type: "grass",
        move1 : {
            name: "tackle",
            power: 45,
            pp: 25,
            accuracy: 100
        },
        move2 : {
            name: "vine whip",
            power: 45,
            pp: 25,
            accuracy: 100
        },
        HP: 45,
        deff: 49,
        atk:49,
    };
    let poke2= {
        name: "charmander",
        type: "fire",
        move1 : {
            name: "scratch",
            power: 40,
            pp: 25,
            accuracy: 100
        },
        move2 : {
            name: "ember",
            power: 40,
            pp: 25,
            accuracy: 100
        },
        HP: 39,
        deff: 43,
        atk:52,
    };
    let poke3= {
        name: "squirtle",
        type: "water",
        move1 : {
            name: "tackle",
            power: 45,
            pp: 25,
            accuracy: 100
        },
        move2 : {
            name: "water gun",
            power: 40,
            pp: 25,
            accuracy: 100
        },
        HP: 44,
        deff: 65,
        atk: 48,
    };
    
}

function ataque1(p1,p2) {
    //Daño planta -> agua (ineficaz)
    if(p1.type==="grass" && p2.type==="water"){
        p2.HP = (p2.HP * p2.deff)/5 - ((p1.move1.power * p1.atk)/5)/0.5
    }

}
module.exports = 
{generarPokemon, ataque1} 