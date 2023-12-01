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

// Rota para inserir um profissional
app.post('/profissionais', (req, res) => {
  const {
    usuario,
    senha,
    servico_prestado,
    observacoes,
    local_atendimento,
    segunda,
    segunda_inicio,
    segunda_fim,
    // adicione outros campos aqui...
  } = req.body;

  const inserirProfissionalQuery = `
    INSERT INTO profissionais (
      usuario,
      senha,
      servico_prestado,
      observacoes,
      local_atendimento,
      segunda,
      segunda_inicio,
      segunda_fim
      -- adicione outros campos aqui...
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    inserirProfissionalQuery,
    [
      usuario,
      senha,
      servico_prestado,
      observacoes,
      local_atendimento,
      segunda,
      segunda_inicio,
      segunda_fim,
      // adicione outros valores aqui...
    ],
    (err, result) => {
      if (err) {
        console.error('Erro ao inserir profissional:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('Profissional inserido com sucesso!');
        res.status(201).json({ success: true, id: result.insertId });
      }
    }
  );
});

// Endpoint para obter horários disponíveis
app.get("/api/disponibilidade", (req, res) => {
  const selectedDay = req.query.dia; // Obtém o dia da consulta de consulta

  // Aqui você deve consultar seu banco de dados para obter os horários disponíveis
  // com base no dia selecionado e enviar a resposta como um array de horários.
  // Por enquanto, vamos apenas enviar alguns dados fictícios.
  const disponibilidade = ["09:00", "10:00", "12:00"];
  res.json(disponibilidade);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



