const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);

mongoose.connect(
  "mongodb+srv://series:series@cluster0-mqntg.gcp.mongodb.net/minhas-series?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

mongoose.Promise = global.Promise

module.exports = mongoose;