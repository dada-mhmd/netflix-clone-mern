import express from 'express';
import {
  deleteSearchHistory,
  getSearchHistory,
  searchActor,
  searchMovie,
  searchTv,
} from '../controllers/searchCtrl.js';

const router = express.Router();

router.get('/actor/:query', searchActor);
router.get('/movie/:query', searchMovie);
router.get('/tv/:query', searchTv);

router.get('/history', getSearchHistory);
router.delete('/history/:id', deleteSearchHistory);

export default router;
