// const express = require("express");
var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
/* GET users listing. */

// router.get("/", function (req, res, next) {
//   data = fs.readFileSync("/", "utf-8");
//   arr = JSON.parse(data);
//   const data = fs.readFileSync(
//     path.join(__dirname, "../public/contacts.json"),
//     "utf-8"
//   );
//   res.send(arr);
// });
router.post("/file/new", (req, res) => {
  const { userName, fileName } = req.body;
  if (!userName || !fileName) {
    return res.status(400).send({ error: "missing user name or file name" });
  }
  try {
    fs.writeFileSync(path.join(__dirname, "../users", userName, fileName), "");
    res.send("file created");
  } catch (err) {
    res.status(500).send({
      error: "error creating file",
      details: err.message,
    });
  }
});

router.post("/newDir", (req, res) => {
  const newDir = fs.mkdirSync(path.join(__dirname`./${req.body.dirName}`));
  res.send(newDir);
});

module.exports = router;
