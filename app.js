const express = require("express");
app = express();
const db = require("./db/connection");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O express esta rodando na porta ${PORT}`);
});

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
