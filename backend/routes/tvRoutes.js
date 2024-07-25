import express from 'express';
import {
  getSimilarTvShows,
  getTvDetails,
  getTvShowsByCategory,
  getTvShowsTrailers,
  trendingTvShows,
} from '../controllers/TvShowCtrl.js';

const router = express.Router();

router.get('/trending', trendingTvShows);
router.get('/:id/trailers', getTvShowsTrailers);
router.get('/:id/details', getTvDetails);
router.get('/:id/similar', getSimilarTvShows);
router.get('/:category', getTvShowsByCategory);

export default router;
