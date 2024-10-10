import { Router } from "express";
import authService from "../services/authService.js";

const router = Router();

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { email, password, rePass } = req.body;

  if (password !== rePass) {
    throw new Error("Password don't match!");
  }

  await authService.register(email, password);

  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);
    res.cookie("auth", token);

    res.redirect("/");
  } catch (error) {
    res.redirect("/");
    console.log(error.message);

    throw new Error("You mast to be registered user login");
  }
});

router.get('/logout', (req, res) => {
   res.clearCookie('auth');

   res.redirect('/');
});

export default router;
