import { Router } from "express";

import homeController from "./controllers/homeController.js";
import createController from "./controllers/movieController.js"

const router = Router();

router.use(homeController);
router.use('/movies', createController)

export default router;
