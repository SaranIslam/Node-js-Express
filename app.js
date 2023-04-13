const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;
const path = require('path');
const planRouter = require("./src/router/planRouter")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/plan", planRouter); 

app.get("/", (req, res) => {

    res.render('index');
})

app.listen(PORT, () => {
    debug("Listening on port" + PORT);
})
