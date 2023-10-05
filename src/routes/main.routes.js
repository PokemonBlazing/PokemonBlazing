const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    let user = req.session.user
    res.render('home', {user});
})

module.exports = router;