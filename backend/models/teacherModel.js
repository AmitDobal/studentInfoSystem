const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  teacherId: { type: String, required: true, unique: true },
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
  coursesTaught: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  // Other teacher-specific fields
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
