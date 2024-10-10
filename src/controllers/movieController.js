import { Router } from "express";

import movieService from "../services/movieService.js";

const router = Router();

router.get("/create", (req, res) => {
  res.render("movies/create");
});

router.post("/create", async (req, res) => {
  const movieData = req.body;
  const isOwner = req.user._id;

  await movieService.createMovie(movieData, isOwner);

  res.redirect("/");
});

router.get("/:movieId/details", async (req, res) => {
  const movieId = req.params.movieId;

  let movie = await movieService.getOne(movieId).lean();
  const casts = movie.casts;

  const isOwner = req.user?._id && req.user?._id == movie.owner;

  movie.rating = movieRating(movie.rating);
  res.render(`movies/details`, { movie, casts, isOwner });
});

router.get("/:movieId/remove", async (req, res) => {
  const movieId = req.params.movieId;

  await movieService.del(movieId);

  res.redirect("/");
});

const movieRating = (rating) => {
  if (!Number.isInteger(rating)) {
    return "n\\a";
  }
  if (rating % 2 === 0) {
    return "&#x2605;".repeat(rating / 2);
  } else {
    rating = rating / 2;
    rating -= 1;
    return "&#x2605;".repeat(rating) + "&#x2606;";
  }
};

export default router;
