const express = require("express");
const bodyParser = require("body-parser");

const mainRouter = require("./routes/mainRouter");
const tableRouter = require("./routes/tableRouter");

const app = express();

app.use("/main", mainRouter);
app.use("/table", tableRouter)

app.use(bodyParser.json())
    .listen(1414, () => {
        console.log("server has started on 1414 port!");
    });