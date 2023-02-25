const express = require("express");
const router = express.Router();
const vaga = require("../models/Vaga");

router.get("/test", (req, res) => {
  res.send("deu certo");
});
// adicionar vaga
router.post("/add", (req, res) => {
  let { title, salary, company, description, email, new_job } = req.body;
  //console.log(title, salary, company, description, email, new_job);
  //insert
  console.log(title, salary, company, description, email, new_job);
  vaga
    .create({
      title,
      description,
      salary,
      company,
      email,
      new_job,
    })

    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log("erro " + err));
});

module.exports = router;
