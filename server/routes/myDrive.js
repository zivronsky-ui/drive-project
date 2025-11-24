// const express = require("express");
var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
/* GET users listing. */
const userName = "ziv";
// router.get("/", function (req, res, next) {
//   data = fs.readFileSync("/", "utf-8");
//   arr = JSON.parse(data);
//   const data = fs.readFileSync(
//     path.join(__dirname, "../public/contacts.json"),
//     "utf-8"
//   );
//   res.send(arr);
// });
router.post(`/file/new`, (req, res) => {
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

router.post("/folder/new", (req, res) => {
  const newDir = fs.mkdirSync(path.join(__dirname`./${req.body.dirName}`));
  res.send(newDir);
});

router.delete("/file/delete", (req, res) => {
  try {
    fs.deleteFile(path.join(__dirname, "../users", userName, fileName), "");
    res.send("file deleted");
  } catch (err) {
    res.status(500).send({
      error: "error deleting file",
      details: err.message,
    });
  }
});

router.put("/file/rename", (req, res) => {
  const { fileName, newFileName } = req.body;
  const newName = fs.rename(
    path.join(__dirname, "../users", userName, fileName),
    path.join(__dirname, "../users", userName, newFileName),
    (err) => {
      if (err) {
        res.status(500).send({
          error: "error renaming ",
          details: err.message,
        });
        res.send("renaming succesed");
      }
    }
  );
});

module.exports = router;
