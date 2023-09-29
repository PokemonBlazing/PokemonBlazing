const {Router} = require('express');
const {CreateUser, LoginUser} = require('../controllers/user.controllers');
const router = Router()

// LOGIN
router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
    const datosForm = req.body;
    try {
        req.session.user = await LoginUser(datosForm);
        console.log(req.session.user);
        res.send('Logueado');
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
        res.send('nashe');
    } catch (error) {
        res.redirect('/register');
    }
})

module.exports = router 