const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'maria159753',
  database: 'reserveme',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MariaDB');
});

//caminho da Rota
app.post('/cadastrarDados', (req, res) => {
  const dados = req.body;

  connection.query(
    'INSERT INTO teste (nome, sobrenome, genero, celular, senha, nascimento, tipoDocumento, numeroDocumento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [dados.nome, dados.sobrenome, dados.genero, dados.celular, dados.senha, dados.nascimento, dados.tipoDocumento, dados.numeroDocumento],
    (error, results) => {
      if (error) {
        console.error('Erro ao inserir dados:', error);
        res.status(500).json({ error: 'Erro ao cadastrar dados' });
        return;
      }

      res.status(200).json({ success: true, message: 'Cadastro realizado com sucesso' });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

