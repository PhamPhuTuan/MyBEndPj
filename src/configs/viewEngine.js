import express from "express";
import {engine} from 'express-handlebars';
import path from "path";

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    // app.set("view engine", "ejs");
    const exphbs = engine({
        extname: '.hbs',
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "main"),
        defaultLayout:''
      });
    app.engine('handlebars', exphbs);
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
}

export default configViewEngine