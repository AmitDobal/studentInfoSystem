const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  // Other course-specific fields
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
