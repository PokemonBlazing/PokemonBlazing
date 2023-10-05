const {Router} = require('express');
const router = Router()

const encounter = require('../controllers/encounters');

//Encuentro charmander
router.get('/encounter',(req,res)=> {
    res.render("firstEvent");
});
router.get('/encounter1/ataque1', async (req,res)=>{
    const P = encounter.pokemon;
    encounter.ataque1(P[0],P[2]);
    console.log(P[2].HP);
    console.log(P[0].HP);
    if(P[2].HP>0 && P[0].HP>0){
        encounter.ataque1(P[2],P[0]);
    }
    if(P[0].HP<=0){
        res.redirect("/home");
    }
    if(P[2].HP<=0){
        res.redirect("/healing");
    }
})
router.get('/encounter1/ataque2', async (req,res)=>{
    const P = encounter.pokemon;
    console.log(P[2].HP);
    console.log(P[0].HP);
    encounter.ataque2(P[0],P[2]);
    if(P[2].HP>0 && P[0].HP>0){
        encounter.ataque2(P[2],P[0]);
    }
    if(P[0].HP<=0){
        res.redirect("/home");
    }
    if(P[2].HP<=0){
        res.redirect("/healing");
    }
})

//Encuentro Squirtle
router.get('/encounter2',(req,res)=> {
    res.render("secondEvent");
});
router.get('/encounter2/ataque1', async (req,res)=>{
    const P = encounter.pokemon;
    encounter.ataque1(P[0],P[1]);
    console.log(P[1].HP);
    if(P[2].HP>0 && P[0].HP>0){
        encounter.ataque1(P[1],P[0]);
    }
    if(P[0].HP<=0){
        res.redirect("/");
    }
    if(P[1].HP<=0){
        res.redirect("/healing");
    }
})
router.get('/encounter2/ataque2', async (req,res)=>{
    const P = encounter.pokemon;
    encounter.ataque2(P[0],P[1]);
    if(P[1].HP>0 && P[0].HP>0){
        encounter.ataque2(P[1],P[0]);
    }
    if(P[0].HP<=0){
        res.redirect("/");
    }
    if(P[1].HP<=0){
        res.redirect("/healing");
    }
})

//Evento curacion
router.get("/healing", (req,res)=>{
    const P = encounter.pokemon;
    encounter.curar(P[0]);
    res.render("healing");
})

module.exports = router;