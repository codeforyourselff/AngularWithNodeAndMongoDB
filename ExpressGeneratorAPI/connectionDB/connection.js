const mongoose = require("mongoose");

//creating database
const dbName = "FormsProject"

//connection url
const connections = mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

module.exports = { connections }
