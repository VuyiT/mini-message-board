const { Router } = require("express");
const indexRouter = Router();

indexRouter.route("/")
 .get((req, res) => {
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
  })
  .post((req, res) => {
    console.log(req.body);
  });
module.exports = indexRouter;