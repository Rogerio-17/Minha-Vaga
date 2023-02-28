const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const db = require("./db/connection");
const bodyParse = require("body-parser");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O express esta rodando na porta ${PORT}`);
});

//app static folder
app.use(express.static(path.join(__dirname, "public")));

// BodyParse
app.use(bodyParse.urlencoded({ extended: false }));

// Handle Bars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
  res.render("index");
});

// route vagas
app.use("/vagas", require("./routes/vagas"));
