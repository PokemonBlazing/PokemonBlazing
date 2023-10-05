//import Pokedex from "pokedex-promise-v2";

const { res } = require("express");
const fetch = require("node-fetch");

  
let pokemon  =[    
    poke1= {
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
        HPmax: 45,
        HP: 45,
        deff: 49,
        atk:49,
    },
    poke2= {
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
    },
    poke3= {
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
    }
]

function ataque1(p1,p2) {
    //Daño planta -> fuego (poco eficaz)
    if(p1.type==="grass" && p2.type==="fire"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move1.power * (p1.atk/p2.deff)/50+2) * 0.5)
    }
    //Daño planta -> agua (muy eficaz)
    if(p1.type==="grass" && p2.type==="water"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move1.power * (p1.atk/p2.deff)/50+2) * 1.5)
    }
    //Daño fuego -> planta (muy eficaz)
    if(p1.type==="fire" && p2.type==="grass"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move1.power * (p1.atk/p2.deff)/50+2) * 1.5)
    }
    //Daño fuego -> agua (poco eficaz)
    if(p1.type==="fire" && p2.type==="water"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move1.power * (p1.atk/p2.deff)/50+2) * 0.5)
    }
    //Daño agua -> planta (poco eficaz)
    if(p1.type==="water" && p2.type==="grass"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move1.power * (p1.atk/p2.deff)/50+2) * 0.5)
    }
    //Daño agua -> fuego (muy eficaz)
    if(p1.type==="water" && p2.type==="fire"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move1.power * (p1.atk/p2.deff)/50+2) * 1.5)
    }

}
function ataque2(p1,p2) {
    //Daño planta -> fuego (poco eficaz)
    if(p1.type==="grass" && p2.type==="fire"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move2.power * (p1.atk/p2.deff)/50+2) * 0.5)
    }
    //Daño planta -> agua (muy eficaz)
    if(p1.type==="grass" && p2.type==="water"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move2.power * (p1.atk/p2.deff)/50+2) * 1.5)
    }
    //Daño fuego -> planta (muy eficaz)
    if(p1.type==="fire" && p2.type==="grass"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move2.power * (p1.atk/p2.deff)/50+2) * 1.5)
    }
    //Daño fuego -> agua (poco eficaz)
    if(p1.type==="fire" && p2.type==="water"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move2.power * (p1.atk/p2.deff)/50+2) * 0.5)
    }
    //Daño agua -> planta (poco eficaz)
    if(p1.type==="water" && p2.type==="grass"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move2.power * (p1.atk/p2.deff)/50+2) * 0.5)
    }
    //Daño agua -> fuego (muy eficaz)
    if(p1.type==="water" && p2.type==="fire"){
        p2.HP = Math.ceil(p2.HP - (2 * p1.move2.power * (p1.atk/p2.deff)/50+2) * 1.5)
    }
}
function curar(p1){
    p1.HP = p1.HPmax;
}
module.exports = 
{pokemon, ataque1, ataque2, curar} 