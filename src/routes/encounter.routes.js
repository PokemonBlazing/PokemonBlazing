const {Router} = require('express');
const router = Router()

const encounter = require('../controllers/encounters');

router.get('/encounter',(req,res)=> {
    // P = encounter.generarPokemon();
    res.render("firstEvent");
});

module.exports = router;