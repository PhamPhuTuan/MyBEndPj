import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/darling', (req, res)=>{
        res.send("My Darling is Ngan"); 
    });

    return app.use('/', router)
}

module.exports = initWebRoute;