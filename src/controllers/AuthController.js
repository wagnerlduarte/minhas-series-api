const mongoose = require("mongoose");

module.exports = {
  async login(req, res) {
    const { identifier, password } = req.body;

    if (identifier === "admin@admin.com" && password === "admin") {
      return res.json({
        jwt: "d2FnbmVyIGxlbW9zIGR1YXJ0ZQ==",
        user: identifier
      });
    } else {
      return res.status(401).send({ error: "Usuário ou senha inválidos" });
    }
  }
};
