const express = require("express");
const {
  getAllStudents,
  getStudentById,
  createStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", getAllStudents);
router.get("/:studentId", getStudentById);
router.post("/", createStudent);
// router.put('/:studentId', updateStudent);
// router.delete('/:studentId', deleteStudent);

module.exports = router;
