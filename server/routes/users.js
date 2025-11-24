var express = require("express");
var router = express.Router();
const fs = require("fs");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  fs.readFile("./users/users.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading users file:", err);
      return res.status(500).send("Internal server error");
    }

    const users = JSON.parse(data);
    const user = users.find(
      (user) => user.name === username && user.password === password
    );
    if (user) {
      res.status(200).send({ message: "Login successful", user: user });
    } else {
      res.status(401).send({ message: "Invalid username or password" });
    }
  });
});

module.exports = router;
