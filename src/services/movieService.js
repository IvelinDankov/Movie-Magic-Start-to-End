import Movie from "../Model/Movie.js";

const createMovie = (movieData) => {
  return Movie.create(movieData);
};

const getOne = (movieId) => {
  return  Movie.findById(movieId)
}

export default {
  createMovie,
  getOne
};
