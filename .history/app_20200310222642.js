const express = require('express');
// MySQLを使うためのコードを貼り付けてください
const mysql = require ('mysql');

const app = express();

app.use(express.static('public'));
// 定数connectionを定義して接続情報の書かれたコードを代入してください
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
    res.render('index.ejs',{items: results});
  })
});

app.listen(3000);