const express = require("express");
const router = express.Router();
const vaga = require("../models/Vaga");

router.get("/add", (req, res) => {
  res.render("add");
});

// detalhe da vaga
router.get("/view/:id", (req, res) =>
  vaga
    .findOne({
      where: { id: req.params.id },
    })
    .then((vaga) => {
      res.render("view", {
        vaga,
      });
    })
    .catch((err) => console.log(err))
);

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
