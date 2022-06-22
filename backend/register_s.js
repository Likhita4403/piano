const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // confirmPassword: {
    //     type: String,
    //     required: true
    // }
});
RegisterSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
      next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const RegisterModel = mongoose.model("Users", RegisterSchema);
module.exports = RegisterModel;