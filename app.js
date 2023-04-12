const express = require('express');
//const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;
const path = require('path');
const priceRouter = require("./src/router/courseRouter")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/price", priceRouter); 

app.get("/", (req, res) => {

    //res.send('Hello Broooo');
    res.render('index');
})

app.listen(PORT, () => {
    debug("Listening on port" + PORT);
})
