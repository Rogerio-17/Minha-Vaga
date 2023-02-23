const Sequelize = require("sequelize");
const db = require("../db/connection");

const Vaga = db.define(vagas, {
  title: {
    type: Sequelize.STRING,
  },

  description: {
    type: Sequelize.STRING,
  },

  salary: {
    type: Sequelize.STRING,
  },

  company: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
  },

  new: {
    type: Sequelize.STRING,
  },
});

module.exports = Vaga;
