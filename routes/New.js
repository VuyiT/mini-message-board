const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.route("/")
 .get((req, res) => {
    res.render("form", {
        title: "New Message"
    })
  })
  .post((req, res) => {
    res.send("POST Request Called");
  });

module.exports = newMessageRouter;