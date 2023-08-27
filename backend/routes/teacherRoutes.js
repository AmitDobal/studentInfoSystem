const express = require("express");
const { getAllUsers, createUser } = require("../controllers/userController");
const router = express.Router();


router.get('/teachers', TeacherController.getAllTeachers);
router.get('/teachers/:teacherId', TeacherController.getTeacherById);
router.post('/teachers', TeacherController.createTeacher);
router.put('/teachers/:teacherId', TeacherController.updateTeacher);
router.delete('/teachers/:teacherId', TeacherController.deleteTeacher);

module.exports = router