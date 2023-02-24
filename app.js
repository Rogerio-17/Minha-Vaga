const express = require("express");
const app = express();
const db = require("./db/connection");
const bodyParse = require("body-parser");

const PORT = 3001;

app.listen(PORT, function () {
  console.log(`O express esta rodando na porta ${PORT}`);
});

// BodyParse
app.use(bodyParse.urlencoded({ extended: false }));
// db conection
db.authenticate()
  .then(() => {
    console.log("conectou ao banco com sucesso");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao tentar conectar", err);
  });

// routes
app.get("/", (req, res) => {
  res.send("Projeto está funcionando 5");
});

// route vagas
app.use("/vagas", require("./routes/vagas"));
