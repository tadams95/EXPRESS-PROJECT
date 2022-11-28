const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

//load handlebars and load templates
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

//serves everything under a particular path
app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index", {
      title: "My friends are very clever",
      caption: "Let\'s go to the snow!"
    })
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
