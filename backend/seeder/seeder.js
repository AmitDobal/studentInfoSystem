const db = require("../db/db");
const Student = require("../models/studentModel");
const User = require("../models/userModel");
const indianStudentData = require("./studentSeed");
const users = require("./userSeed");

const seeder = async () => {
  try {
    await deleteAllData();

    // await User.insertMany(users);
    await Promise.all(
      indianStudentData.map(async (studentData) => {
        const user = new User({
          firstName: studentData.firstName,
          lastName: studentData.lastName,
          email: studentData.firstName.toLowerCase() + "@abc.com",
          password: "password123",
          userName:
            studentData.firstName.toLowerCase() +
            studentData.lastName.toLowerCase(),
          role: "student",
        });
        await user.save();

        const student = new Student({
          user: user._id,
          studentId: studentData.studentId,
          firstName: studentData.firstName,
          lastName: studentData.lastName,
          dateOfBirth: studentData.dateOfBirth,
          enrolledCourses: studentData.enrolledCourses,
        });
        await student.save();
      })
    );

    console.log("seed data succefull");
  } catch (error) {
    console.log(error.message);
  }
};

const deleteAllData = async () => {
  try {
    await User.collection.deleteMany({});
    await Student.collection.deleteMany({});
    console.log("All seed deleted succefully");
  } catch (error) {
    console.log(error.message);
  }
};

seeder();
