import User from '../models/userModel.js';
import { fetchTmdb } from '../services/tmdbService.js';

export const searchActor = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await fetchTmdb(`
  https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);

    if (response.results.length === 0) {
      response.status(404).json(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: 'actor',
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response?.results });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const searchMovie = async (req, res) => {
  const { query } = req.params;

  try {
    const response = await fetchTmdb(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return response.status(404).json(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: 'movie',
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response?.results });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const searchTv = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await fetchTmdb(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return response.status(404).json(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].name,
          searchType: 'tv',
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response?.results });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSearchHistory = async (req, res) => {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteSearchHistory = async (req, res) => {
  let { id } = req.params;

  id = parseInt(id);

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id },
      },
    });
    res.status(200).json({ success: true, message: 'deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
