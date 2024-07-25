import { fetchTmdb } from '../services/tmdbService.js';

export const trendingMovie = async (req, res) => {
  try {
    const data = await fetchTmdb(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    );
    const trendingMovie =
      data.results[Math.floor(Math.random() * data?.results?.length)];

    res.json({ success: true, content: trendingMovie });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getMovieTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    res.json({ success: true, trailers: data?.results });
  } catch (error) {
    console.log(error);
    if (error.message.includes('404')) {
      res.status(404).send(null);
    }
    res.json({ success: false, message: error.message });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes('404')) {
      res.status(404).send(null);
    }

    res.json({ success: false, message: error.message });
  }
};

export const getSimilarMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    res.json({ success: true, similar: data?.results });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const getMoviesByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );

    res.json({ success: true, content: data?.results });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
