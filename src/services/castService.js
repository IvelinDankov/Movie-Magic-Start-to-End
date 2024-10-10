import Cast from "../Model/Cast.js";
import Movie from "../Model/Movie.js";

const createCast = (castData) => {
  return Cast.create(castData);
};

const getAllCast = () => Cast.find();

const attach = (movieId, castId) => {

  return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
};

export default {
  createCast,
  getAllCast,
  attach,
};
