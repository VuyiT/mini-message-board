const express = require("express");
const app = express();
app.set("view engine", "ejs");
const PORT = 8080;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listening for requests on port ${PORT}`);
});
