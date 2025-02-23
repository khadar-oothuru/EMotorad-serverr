const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instagram: { type: String, default: "" },
  youtube: { type: String, default: "" },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
