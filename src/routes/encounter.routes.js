const {Router} = require('express');
const router = Router()

const encounter = require('../controllers/encounters');

//Encuentro charmander
router.get('/encounter',(req,res)=> {
    res.render("firstEvent");
});
router.post('/encounter1/ataque1', async (req,res)=>{
    const P = encounter.pokemon;
    encounter.ataque1(P[0],P[2]);
    encounter.ataque1(P[2],P[0]);
    console.log("Vida pokemon 1 " + P[0].HP);
    console.log("Vida pokemon 2 " + P[2].HP);
    if(P[2].HP>0 && P[0].HP>0){
        res.redirect('/encounter');
    }
    if(P[0].HP<=0){
        encounter.curar(P[0]);
        res.redirect("/");
    }
    if(P[2].HP<=0){
        res.redirect("/healing");
    }
})
router.post('/encounter1/ataque2', async (req,res)=>{
    const P = encounter.pokemon;
    encounter.ataque2(P[0],P[2]);
    encounter.ataque2(P[2],P[0]);
    console.log("Vida pokemon 1 " + P[0].HP);
    console.log("Vida pokemon 2 " + P[2].HP);
    if(P[2].HP>0 && P[0].HP>0){
        res.redirect('/encounter');
    }
    if(P[0].HP<=0){
        encounter.curar(P[0]);
        res.redirect("/");
    }
    if(P[2].HP<=0){
        res.redirect("/healing");
    }
})

//Encuentro Squirtle
router.get('/encounter2',(req,res)=> {
    res.render("secondEvent");
});
router.post('/encounter2/ataque1', async (req,res)=>{
    const P = encounter.pokemon;
    encounter.ataque1(P[0],P[1]);
    encounter.ataque1(P[1],P[0]);
    console.log("Vida pokemon 1 " + P[0].HP);
    console.log("Vida pokemon 2 " + P[1].HP);
    if(P[1].HP>0 && P[0].HP>0){
        res.redirect('/encounter2');
    }
    if(P[0].HP<=0){
        encounter.curar(P[0]);
        res.redirect("/");
    }
    if(P[1].HP<=0){
        res.redirect("/healing");
    }
});

router.post('/encounter2/ataque2', async (req,res)=>{
    const P = encounter.pokemon;
    encounter.ataque2(P[0],P[1]);
    encounter.ataque2(P[1],P[0]);
    console.log("Vida pokemon 1 " + P[0].HP);
    console.log("Vida pokemon 2 " + P[1].HP);
    if(P[1].HP>0 && P[0].HP>0){
        res.redirect('/encounter2');
    }
    if(P[0].HP<=0){
        encounter.curar(P[0]);
        res.redirect("/");
    }
    if(P[1].HP<=0){
        res.redirect("/win");
    }
})

//Evento curacion
router.get("/healing", (req,res)=>{
    const P = encounter.pokemon;
    encounter.curar(P[0]);
    console.log(P[0].HP);
    res.render("healing");
})

module.exports = router;