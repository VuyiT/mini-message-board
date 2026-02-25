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

app.get("/", (req, res) => {
    const messages = [
        {
          text: "Hi there!",
          user: "Amando",
          added: new Date()
        },
        {
          text: "Hello World!",
          user: "Charles",
          added: new Date()
        }
    ];

    res.render("index.ejs", {
        title: "Messages",
        messages });
});