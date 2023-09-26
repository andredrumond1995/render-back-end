const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Dados de exemplo
const produtos = [
  { id: 1, nome: 'Produto 1', preco: 10.99 },
  { id: 2, nome: 'Produto 2', preco: 19.99 },
  { id: 3, nome: 'Produto 3', preco: 5.99 },
  { id: 4, nome: 'Produto 4', preco: 8.99 },
  { id: 5, nome: 'Produto 5', preco: 12.99 },
];

// Rota para /produtos
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
