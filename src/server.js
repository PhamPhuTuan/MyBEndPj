import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config();

const app = express();
const port = process.env.PORT;

configViewEngine(app);

app.get('/', (req, res)=>{
    res.render('index.ejs')
});

app.get('/darling', (req, res)=>{
    res.send("My Darling is Ngan");
});

app.listen(port, () => {
    console.log(`Example app dang at port ${port}`);
});
