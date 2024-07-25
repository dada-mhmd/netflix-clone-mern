import express from 'express';
import 'dotenv/config';

import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import tvRoutes from './routes/tvRoutes.js';
import searchRoutes from './routes/searchRoutes.js';

import connectDB from './config/database.js';

import { protectRoutes } from './middleware/protect.js';

const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movie', protectRoutes, movieRoutes);
app.use('/api/v1/tv', protectRoutes, tvRoutes);
app.use('/api/v1/search', protectRoutes, searchRoutes);

// deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}
// end  deployment

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
