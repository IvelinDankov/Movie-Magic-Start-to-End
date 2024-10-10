import Movie from "../Model/Movie.js";

const getAll = (filter = {}) => {
  let moviesQuery = Movie.find();

  if (filter.search) {
    moviesQuery.find({ title: { $regex: filter.search, $options: "i" } });
  }

  if (filter.genre) {
    moviesQuery.find({ genre: filter.genre.toLowerCase() });
  }

  if (filter.year) {
    moviesQuery.find({ year: filter.year });
  }

  return moviesQuery;
};

const createMovie = (movieData, isOwner) => {
  return Movie.create({ ...movieData, owner: isOwner });
};

const getOne = (movieId) => {
  return Movie.findById(movieId).populate("casts");
};

const del = (movieId) => Movie.findByIdAndDelete(movieId)

export default {
  getAll,
  createMovie,
  getOne,
  del
};
