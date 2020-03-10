const express = require('express');
const mysql = require ('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  connection.query('SELECT * FROM items', (error, results) => {
    console.log(lesolts);
    res.render('index.ejs', { items: results });
  });
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query('INSERT INTO items VALUES(?)',
    [req.body.itemName],
    (error, result) => {
      connection.query('SELECT * FROM items',
        (error, result) => {
          res.render('/new', { items: result });
        })
    }
  );
});

app.listen(3000);