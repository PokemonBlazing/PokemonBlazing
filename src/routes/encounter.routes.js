const {Router} = require('express');
const router = Router()

const encounter = require('../controllers/encounters');

router.get('/encounter',(req,res)=> {
    res.render("firstEvent");
});
router.post('/encounter/ataque1', async (req,res)=>{
    P = await encounter.generarPokemon();
    console.log(P);
    await encounter.ataque1(P.poke1,P.poke3);
    console.log(poke3.HP);
})

module.exports = router;