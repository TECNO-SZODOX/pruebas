const express = require('express');
const app = express();//app es el servidor
const morgan = require('morgan');// hace lo mismo q logger, es un modulo

//SETTINGS
app.set('appjoan','mi app de tuto');//segundo param, valor;1° nombre de var,creo var
app.set('port',4000);
//motor de plantillas nos ayuda a extender el html
//instalaremos nuevo modulo:eje consultar una BD, Y MOSTRARLOS
//X PANTALLA , mod: ejs de expre..
app.set('view engine','ejs');// no es necesario requerirlo


//MIDDLEWARES
app.use(express.json());
//app.use(logger);//desde aca se ejecutan los midewards
app.use(morgan('dev'));//necesita config





//ROUTES


//app.all('/all', (req, res, next) => {

///console.log('por aqui paso');
/*/res.send('finish');*/
////next();//continua con los sgte
//});

app.get('/uj', (req, res) => {
    res.send('<h1>hello world</h1>');
});

//enrutamiento o rutas con el metodo get //devolver sirve
app.get('/about', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'chavo'

    });//json=que devolveremos un objetio js
});


app.post('/post/:id', (req, res) => {// /:por aca recibo , ruta dinamicapodemos crear y lo q queremos recibir
    console.log(req.params);//para verlo pongo un params
    console.log(req.body);//objeto q recibe  los datos del front..
    res.send('POST REQUEST RECEIVED.PETICION POST RECIVIDA');
});
/*
//actualizar un dato
app.put('/put', (req, res) => {
    res.send('PETICION DE ACTUALIZACION RECIVIDA');
});
//eliminar dato
app.delete('/delete', (req, res) => {
    res.send('DELETE REQUEST RECEIVED');
})*/

app.put('/put/:id', (req, res) => {


    console.log(req.body);
    res.send(`User ${req.params.id} update`);
});


//eliminar dato, elimiar usuario 777
app.delete('/delete/:id', (req, res) => {


    res.send(`User ${req.params.id} deleted`);
});



app.use(express.static('public'));
//carpeta, procesa todas las peticiones
//oyente , archivos estaticos
app.listen(app.get('port'), () => {
    console.log(app.get('appjoan'));//obtengo var
    console.log('server on port de  mr.Joan:',app.get('port'));
});


//config de express: puerto,motor de plantillas, o nombre de la aplic.,etc
//usaremos:1 METODO DE LLAMADO SET 
//