const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async register(req, res) {
    try{

      const { identifier, password } = req.body;
      
      const user = await User.create({ identifier, password });
      
      return res.send({ user });
    }
    catch(err){
        return res.status(400).send({error: 'Registration failed'})
    }
  },

  async login(req, res) {
    const { identifier, password } = req.body;

    if (identifier === "admin@admin.com" && password === "admin") {
      return res.json({
        jwt: "d2FnbmVyIGxlbW9zIGR1YXJ0ZQ==",
        user: identifier,
      });
    } else {
      return res.status(401).send({ error: "Usuário ou senha inválidos" });
    }
  },
};
