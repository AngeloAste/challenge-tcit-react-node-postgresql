import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './db/index.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS para deployment en producción
// Desarrollo: app.use(cors());
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', postRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Challenge TCIT - Gestión de Posts' });
});

const startServer = async () => {
  try {
    await initDatabase();
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
      console.log(`📡 API disponible en /api/posts`);
      console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'desarrollo'}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();
