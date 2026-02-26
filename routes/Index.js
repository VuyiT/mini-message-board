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

async function getMessageById(messageId) {
    return messages.find(message => message.id === messageId);
};

async function getMessageByIdReqRes(req, res) {
    const { messageId } = req.params;
    const message = await getMessageById(messageId);

    if (!message) {
        res.status(404).send("Message not found");
        return;
    }
    res.render("details", {
        title: "Message Details",
        message: message
    });
};

indexRouter.get("/:messageId", getMessageByIdReqRes);

module.exports = indexRouter;