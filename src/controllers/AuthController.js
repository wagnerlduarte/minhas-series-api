const mongoose = require("../database");

const User = mongoose.model("User");

module.exports = {
  async register(req, res) {

    const { identifier, password } = req.body;

    try{

      if(await User.findOne({identifier})){
        return res.status(400).send({error: 'User already exists'})
      }
      
      const user = await User.create({ identifier, password });
      
      user.password = undefined

      return res.send({ user });
    }
    catch(err){
        return res.status(400).send({error: 'Registration failed: ' + err})
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
