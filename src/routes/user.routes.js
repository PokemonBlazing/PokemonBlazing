const {Router} = require('express');
const {CreateUser, LoginUser} = require('../controllers/user.controllers');
const router = Router()

// LOGIN
router.get('/login', (req, res) => {
    if(!req.session.user){
        res.render('login');
    }else{
        res.send('ya esta logueado')
    }
})

router.post('/login', async (req, res) => {
    const datosForm = req.body;
    try {
        req.session.user = await LoginUser(datosForm);
        res.redirect('/');
    } catch (error) {
        res.redirect('/login');   
    }
})

// REGISTER
router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register', async (req, res) => {
    const datosForm = req.body;
    try {
        await CreateUser(datosForm);
        res.redirect('/login');
    } catch (error) {
        res.redirect('/register');
    }
})

router.post('/cerrar-sesion', (req, res) => {
    req.session.destroy();
    res.render('closeSession')
})


module.exports = router 