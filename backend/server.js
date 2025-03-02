const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products.routes');

const app = express();

app.use(cors({
  origin: process.env.ORIGIN_URL || 'http://localhost:5173'
}));
app.use(express.json());
app.use(productsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});