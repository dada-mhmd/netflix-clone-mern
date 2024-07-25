import express from 'express';
import {
  getMovieDetails,
  getMoviesByCategory,
  getMovieTrailers,
  getSimilarMovies,
  trendingMovie,
} from '../controllers/movieCtrl.js';

const router = express.Router();

router.get('/trending', trendingMovie);
router.get('/:id/trailers', getMovieTrailers);
router.get('/:id/details', getMovieDetails);
router.get('/:id/similar', getSimilarMovies);
router.get('/:category', getMoviesByCategory);

export default router;
