const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Parsear JSON del body

// Configurar CORS para permitir solo peticiones desde el frontend en localhost:8080
app.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}));

// Rutas
app.use('/api', contactRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor de backend corriendo en http://localhost:${PORT}`);
});
