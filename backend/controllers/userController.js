const User = require("../models/userModel");

//Fetch all Users
const getAllUsers = async (req, res, next) => {
  try {
    console.log("INSIDE GETALLUSER")
    const users = await User.find();

    res.json({ counts: users.length, users });
  } catch (error) {
    next(error);
  }
};

//Create new User
const createUser = async (req, res, next) => {
  try {
    console.log("REQ BODY ", req.body)
    const user = new User(req.body);
    console.log(user);
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, createUser };
