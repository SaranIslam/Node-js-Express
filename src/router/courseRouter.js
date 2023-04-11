const express = require('express');
const priceRouter = express.Router();
const course = require("./../data/price.json")

priceRouter.route("/").get((req, res) => {
    res.render("price", {
        course,
    }
    );
});
priceRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("course", {
        course1: course[id],
        
    }
    );
});
module.exports = priceRouter;