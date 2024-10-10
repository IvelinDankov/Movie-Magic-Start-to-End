import { Router } from "express";

import movieService from "../services/movieService.js";

const router = Router();

router.get("/create", (req, res) => {
  res.render("movies/create");
});

router.post("/create", async (req, res) => {
  const movieData = req.body;

  
  await movieService.createMovie(movieData);
  
  res.redirect("/");
});

router.get("/:movieId/details", async(req, res) => {
   const movieId = req.params.movieId;
   
   let movie = await movieService.getOne(movieId).lean();
   movie.rating = movieRating(movie.rating)
  res.render(`movies/details`, { movie });
});


const movieRating = (rating) => {
   if (!Number.isInteger(rating)) {
      return 'n\\a';
   }
   if (rating % 2 === 0) {
     
      return '&#x2605;'.repeat(rating / 2);
   } else {
      rating = rating /2
      rating -= 1
      return '&#x2605;'.repeat(rating) + '&#x2606;'
   }
}

export default router;
