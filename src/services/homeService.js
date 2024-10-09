import Movie from "../Model/Movie.js";


const getAll = movieId => Movie.find(movieId);



export default {
    getAll
}