// const express = require("express");
var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
/* GET users listing. */

router.get("/:user", async function (req, res, next) {
  try {
    const files = await fs.promises.readdir(
      path.join(__dirname, "../users", req.params.user)
    );
    const arr = [];
    for (let file of files) {
      const stats = await fs.promises.stat(
        path.join(__dirname, "../users", req.params.user, file)
      );
      if (stats.isDirectory()) {
        // fs.readdir("../users", (err, files) => {
        //   files.forEach((file) => {
        //     console.log(file);
        //   });
        // });
        arr.push({ filename: file, type: "folder" });
      } else {
        arr.push({ filename: file, type: "file" });
      }
    }
    res.send(arr);
  } catch (err) {
    console.error("Error reading directory:", err);
    res.status(500).send({ error: "Failed to read directory" });
  }
});
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
