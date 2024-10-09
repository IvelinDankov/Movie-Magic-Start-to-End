import Movie from "../Model/Movie.js";

const createMovie = (movieData) => {
  return Movie.create(movieData);
};

export default {
  createMovie,
};
