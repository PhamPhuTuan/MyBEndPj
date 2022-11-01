import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Set up view engine
configViewEngine(app);

// Set up web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app dang at port ${port}`);
});
