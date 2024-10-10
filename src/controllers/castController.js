import { Router } from "express";
import castService from "../services/castService.js";
import movieService from "../services/movieService.js";

const router = Router();

router.get('/create', (req, res) => {
   res.render('cast/create')
});

router.post('/create', async (req, res) => {
   const castData = req.body;

//   await movieService.createCast(castData);
    await  castService.createCast(castData)

  res.redirect('/')
});

router.get('/:movieId/attach',async (req, res) => {
   const movieId = req.params.movieId;

 const movie = await movieService.getOne(movieId).lean();

 const casts = await castService.getAllCast().lean()

   res.render(`cast/attach`, {movie, casts} )
});

router.post('/:movieId/attach',async (req, res) => {
   const movieId = req.params.movieId;
   const castId = req.body.cast;

   await castService.attach(movieId, castId)

   res.redirect(`/movies/${movieId}/details`)
   
});

export default router