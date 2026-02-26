const { Router } = require("express");
const indexRouter = Router();

const messages = [
        {
          id: crypto.randomUUID(),  
          text: "Hi there!",
          user: "Venka",
          added: new Date()
        },
        {
          id: crypto.randomUUID(),  
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
    messages.push({ id: crypto.randomUUID(), text: req.body.messageText, user: req.body.messageUser, added: new Date()
    });
    res.redirect("/");
  });
module.exports = indexRouter;