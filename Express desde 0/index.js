const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('appName', 'Test inicial');
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.all('/user', (req, res, next) => {
    console.log('por aqui fue');
    next();
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('post recibido');
});

app.post('/user/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send('post recibido');
});

app.delete('/user/:id', (req, res) => {
    res.send('delete recibido del usuario ' + req.params.id);
});

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log(app.get('port'));
});

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
