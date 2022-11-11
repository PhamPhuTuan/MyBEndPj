import express from 'express';
import {engine} from 'express-handlebars'
import morgan from 'morgan';
import initWebRoute from "./route/web";
import configViewEngine from "./configs/viewEngine";
// import connection from "./configs/connectDB";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));

// Morgan Tracker logger
app.use(morgan('combined'));

// Set up view engine
configViewEngine(app);

// Set up web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app dang at port ${port}`);
});