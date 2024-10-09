import express from "express";
import handlebars, { engine } from "express-handlebars";
import mongoose from "mongoose";

import routes from "./routes.js";

const app = express();

app.use(express.static('./public'))

app.engine('hbs', engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.use(express.urlencoded({extended: false}));

try {
   mongoose.connect('mongodb://localhost:27017/magic-movies');
   console.log('Successfully connected to DB....');
   
} catch (error) {
   console.error.bind(console, 'connection error:');
   
}

app.use(routes)



app.listen(5000, () => `Server is listening on post 5000`);