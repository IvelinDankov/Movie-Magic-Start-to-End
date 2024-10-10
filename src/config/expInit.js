import cookieParser from "cookie-parser";
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export function expInit(app, routes) {
  app.use(cookieParser());
  app.use(express.static("./public"));
  app.use(express.urlencoded({ extended: false }));
  app.use(authMiddleware);
  app.use(routes);
}
