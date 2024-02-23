import { __dirname, app, createPath, messages, contacts } from "../server.js";

const title = "You at home ^_^";

let routes = () => {
  app.get("/", (req, res) => {
    res.render(createPath("index.ejs"), { contacts, title, messages });
  });

  app.post("/send-messge", (req, res) => {
    let { message, name } = req.body;

    if (message == "") {
      res.redirect("/");
    }

    if (name == "") {
      name = "SomeUser";
    }

    // TODO makemessage validation
    const newMessage = {
      name: name,
      date: new Date(),
      message: message,
    };

    messages.push(newMessage);
    res.render(createPath("index.ejs"), { contacts, title, messages });
  });
};

export default routes;
