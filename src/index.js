const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  return res.status(200).send({
    status: true,
    message: "success",
  });
});

app.listen(5000, () => console.log("listening on port 5000"));
