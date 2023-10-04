const {Router} = require('express');
const router = Router()

const encounter = require('../controllers/encounters');

router.get('/encounter',(req,res)=> {
    encounter.generarPokemon();
    res.render("firstEvent");
});
router.get('/encounter/encounter',(req,res)=>{
    encounter.ataque1(poke1,poke3);
    console.log(poke3.HP);
})

module.exports = router;