import { fetchTmdb } from '../services/tmdbService.js';

export const trendingTvShows = async (req, res) => {
  try {
    const data = await fetchTmdb(
      'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
    );
    const trendingTv =
      data.results[Math.floor(Math.random() * data?.results?.length)];

    res.json({ success: true, content: trendingTv });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getTvShowsTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
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

export const getTvDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes('404')) {
      res.status(404).send(null);
    }

    res.json({ success: false, message: error.message });
  }
};

export const getSimilarTvShows = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );
    res.json({ success: true, similar: data?.results });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const getTvShowsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const data = await fetchTmdb(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );

    res.json({ success: true, content: data?.results });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
