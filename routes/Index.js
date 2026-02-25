const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const messages = [
        {
          text: "Hi there!",
          user: "Venka",
          added: new Date()
        },
        {
          text: "Hello World!",
          user: "Hayena",
          added: new Date()
        }
    ];

    res.render("index", {
        title: "Messages",
        messages });
});