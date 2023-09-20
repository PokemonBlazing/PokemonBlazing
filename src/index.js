const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
require('ejs');

const app = express();

// REQUERIMIENTO ARCHIVOS EXTERNOS
const MainRoutes = require('./routes/main-routes');
const encounter = require('./routes/encounter.routes');

// SETTINGS

app.set('viewengine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// MIDDLEWARES

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
    secret: 'mysecretkey_pokemon',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(cookieParser('mysecretkey_pokemon'))

// RUTAS

app.use(MainRoutes);
app.use(encounter);

// INICIO SERVIDOR

app.listen(3000);
console.log("Servidor escuchando en http://localhost:3000");