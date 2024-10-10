import express from "express";


export function expInit(app, routes) {
  app.use(express.static("./public"));

  app.use(express.urlencoded({ extended: false }));
  app.use(routes);
}
