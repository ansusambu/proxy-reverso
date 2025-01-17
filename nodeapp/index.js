const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'fullcycle'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
  const createTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)`;
  connection.query(createTable, (err, result) => {
    if (err) throw err;
  });
});

function obterElementoAleatorio(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function gerarNomeAleatorio() {
  const primeirosNomes = ['João', 'Maria', 'Alex', 'Ana', 'Carlos', 'Beatriz'];
  const sobrenomes = ['Silva', 'Souza', 'Oliveira', 'Santos', 'Pereira', 'Ferreira'];

  const primeiroNome = obterElementoAleatorio(primeirosNomes);
  const sobrenome = obterElementoAleatorio(sobrenomes);

  return `${primeiroNome} ${sobrenome}`;
}

app.get('/', (req, res) => {
  const nome = gerarNomeAleatorio();
  const insertQuery = 'INSERT INTO people (name) VALUES (?)';

  connection.query(insertQuery, [nome], (err, result) => {
    if (err) throw err;

    const selectQuery = 'SELECT name FROM people';
    connection.query(selectQuery, (err, results) => {
      if (err) throw err;
      
      let response = '<h1>Full Cycle Rocks!</h1><ul>';
      results.forEach(row => {
        response += `<li>${row.name}</li>`;
      });
      response += '</ul>';
      res.send(response);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
