const express = require("express");
const { getAllUsers, createUser } = require("../controllers/userController");
const router = express.Router();


router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:courseId', CourseController.getCourseById);
router.post('/courses', CourseController.createCourse);
router.put('/courses/:courseId', CourseController.updateCourse);
router.delete('/courses/:courseId', CourseController.deleteCourse);

module.exports = router