import { Router } from "express";
import homeService from "../services/homeService.js";

const router = Router();

router.get("/", async (req, res) => {
  const movieId = req.params.movieId;
  const movies = await homeService.getAll(movieId).lean();

  res.render("home", { movies });
});

router.get('/about', (req, res) => {
   res.render('home/about');
});

export default router;
