import { Router } from "express";

import homeService from "../services/homeService.js";
import movieService from "../services/movieService.js";

const router = Router();

router.get("/", async (req, res) => {
  const movieId = req.params.movieId;
  const movies = await homeService.getAll(movieId).lean();

  res.render("home", { movies });
});

router.get("/about", (req, res) => {
  res.render("home/about");
});

router.get("/search", async (req, res) => {
  const query = req.query;
  const movies = await movieService.getAll(query).lean();

  res.render("home", { search: true, movies });
});

export default router;
