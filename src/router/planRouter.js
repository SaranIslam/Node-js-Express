const express = require('express');
const planRouter = express.Router();
const detail = require("./../data/plan.json")

planRouter.route("/").get((req, res) => {
    res.render("plan", {
       detail,
    }
    );
});
planRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("detail", {
        details: detail[id],
        
    }
    );
});
module.exports = planRouter;