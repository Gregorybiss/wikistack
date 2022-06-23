const express = require("express");
const router = express.Router();
const { Page, User } = require("../models");
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require("../views");

router.get("/", (req, res) => {
  res.send(wikiPage());
});
router.post("/", async (req, res) => {
  const name = req.body.name;
  const title = req.body.title;
  const email = req.body.email;
  const content = req.body.content;
  const status = req.body.status;
  try {
    const page = await Page.create({
      title: title,
      content: content,
    });
  } catch (e) {
    console.log({ e });
  }
  console.log(req.body);
});
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
