const express = require("express");
const app = express();
app.get("/", (req, res) =>
  res.send("voila!!!... my rest api running on port aws fargate!!!....")
);
app.listen(3000, () => {
  console.log("voila!!!... my rest api running on port aws fargate!!!...");
});
