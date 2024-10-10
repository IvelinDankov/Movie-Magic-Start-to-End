import express from "express";
import routes from "./routes.js";

import { hbsConfig } from "./config/hbsInit.js";
import { expInit } from "./config/expInit.js";
import { mongInit } from "./config/mongInit.js";

const app = express();

hbsConfig(app);
expInit(app, routes);
mongInit();

app.listen(5000, () => `Server is listening on post 5000`);
