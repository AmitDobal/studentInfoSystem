const { default: mongoose } = require("mongoose");
const Student = require("../models/studentModel");
const User = require("../models/userModel");

//*FETCH ALL STUDENTS
const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ count: students.length, data: students });
  } catch (error) {
    next(error);
  }
};

//* GET STUDENT BY ID
const getStudentById = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const student = await Student.find({ _id: studentId });
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

//* CREATE Student
const createStudent = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
  try {
    const { body } = req;

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.firstName.toLowerCase() + "@abc.com",
      password: "password123",
      userName:
        req.body.firstName.toLowerCase() + req.body.lastName.toLowerCase(),
      role: "student",
    });
    const savedUser = await user.save();

    const student = new Student(body);
    await student.save();

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: "Student created succesfully!", student });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

module.exports = { getAllStudents, getStudentById, createStudent };
