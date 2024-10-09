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

  const movie = await movieService.getOne(movieId).lean();

  res.render(`movies/details`, { movie });
});

export default router;
