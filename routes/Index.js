const { Router } = require("express");
const indexRouter = Router();

const messages = [
        {
          text: "Hi there!",
          user: "Venka",
          added: new Date()
        },
        {
          text: "Hello World!",
          user: "Soyun",
          added: new Date()
        }
    ];

indexRouter.route("/")
 .get((req, res) => {
    res.render("index", {
        title: "Messages",
        messages: messages });
  })
  .post((req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date()
    });
    res.redirect("/");
  });
module.exports = indexRouter;