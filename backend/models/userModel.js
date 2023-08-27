const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: "First name should contain only alphabets",
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: "Last name should contain only alphabets",
    },
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userName: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9@_]+$/.test(value); // Alphabets, numerics, and @ allowed
      },
      message: "User name should contain only alphabets, numerics, and @.",
    },
  },
  role: { type: String, enum: ["student", "teacher", "admin"], required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;