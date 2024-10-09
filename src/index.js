import express from "express";
import handlebars, { engine } from "express-handlebars";
import mongoose from "mongoose";

const app = express();

app.use(express.static('./public'))

app.engine('hbs', engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

try {
   mongoose.connect('mongodb://localhost:27017/movie-magic');
   console.log('Successfully connected to DB....');
   
} catch (error) {
   console.error.bind(console, 'connection error:');
   
}


app.get('/', (req, res) => {
   res.render('home')
});


app.listen(5000, () => `Server is listening on post 5000`);