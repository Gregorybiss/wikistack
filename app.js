const express = require("express");
const app = express();
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const userRouter = require("./routes/users");
const wikiRouter = require("./routes/wiki");

app.use(morgan("dev"));
db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.use("/wiki", wikiRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const PORT = 3300;

const init = async () => {
  await db.sync({ force: true });

  // make sure that you have a PORT constant
  await app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
