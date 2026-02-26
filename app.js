const express = require("express");
const app = express();
app.set("view engine", "ejs");

const indexRouter = require("./routes/Index");
const newMessageRouter = require("./routes/New");

const PORT = 8080;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listening for requests on port ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use("/new", newMessageRouter);
app.use("/", indexRouter);