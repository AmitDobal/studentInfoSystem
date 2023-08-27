const mongoose = require("mongoose");

const indianStudentData = [
  {
    user: new mongoose.Types.ObjectId(),
    studentId: "STU001",
    firstName: "Aarshi",
    lastName: "Singhnia",
    dateOfBirth: new Date("1998-04-15"),
    enrolledCourses: [
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    user: new mongoose.Types.ObjectId(),
    studentId: "STU002",
    firstName: "Aditya",
    lastName: "Kumar",
    dateOfBirth: new Date("1999-06-20"),
    enrolledCourses: [new mongoose.Types.ObjectId()],
  },
  {
    user: new mongoose.Types.ObjectId(),
    studentId: "STU003",
    firstName: "Rohan",
    lastName: "Sharma",
    dateOfBirth: new Date("2000-02-10"),
    enrolledCourses: [
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    user: "615a6ec5d6b166001c3e5a49",
    studentId: "STU041",
    firstName: "Aarav",
    lastName: "Verma",
    dateOfBirth: "1998-04-15",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4a", "615a6ec5d6b166001c3e5a4b"],
  },
  {
    user: "615a6ec5d6b166001c3e5a4c",
    studentId: "STU042",
    firstName: "Aditi",
    lastName: "Kumari",
    dateOfBirth: "1999-06-20",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4d"],
  },
  {
    user: "615a6ec5d6b166001c3e5a4e",
    studentId: "STU043",
    firstName: "Rahul",
    lastName: "Joshi",
    dateOfBirth: "2000-02-10",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4a", "615a6ec5d6b166001c3e5a4d"],
  },
  {
    user: "615a6ec5d6b166001c3e5a4f",
    studentId: "STU004",
    firstName: "Kavya",
    lastName: "Singh",
    dateOfBirth: "1997-09-05",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4d"],
  },
  {
    user: "615a6ec5d6b166001c3e5a50",
    studentId: "STU005",
    firstName: "Rajesh",
    lastName: "Gupta",
    dateOfBirth: "1998-11-30",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4c"],
  },
  {
    user: "615a6ec5d6b166001c3e5a51",
    studentId: "STU006",
    firstName: "Neha",
    lastName: "Choudhury",
    dateOfBirth: "2001-03-18",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4e", "615a6ec5d6b166001c3e5a4f"],
  },
  {
    user: "615a6ec5d6b166001c3e5a52",
    studentId: "STU007",
    firstName: "Sanjay",
    lastName: "Mishra",
    dateOfBirth: "1996-07-25",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4b"],
  },
  {
    user: "615a6ec5d6b166001c3e5a53",
    studentId: "STU008",
    firstName: "Ananya",
    lastName: "Thakur",
    dateOfBirth: "2002-05-12",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4e", "615a6ec5d6b166001c3e5a4f"],
  },
  {
    user: "615a6ec5d6b166001c3e5a54",
    studentId: "STU009",
    firstName: "Divya",
    lastName: "Agarwal",
    dateOfBirth: "1995-12-08",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4b", "615a6ec5d6b166001c3e5a4c"],
  },
  {
    user: "615a6ec5d6b166001c3e5a55",
    studentId: "STU010",
    firstName: "Vikram",
    lastName: "Rajput",
    dateOfBirth: "2003-08-22",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4d", "615a6ec5d6b166001c3e5a4e"],
  },
  {
    user: "615a6ec5d6b166001c3e5a56",
    studentId: "STU011",
    firstName: "Sneha",
    lastName: "Bhatia",
    dateOfBirth: "1999-01-17",
    enrolledCourses: ["615a6ec5d6b166001c3e5a4f"],
  },
];

module.exports = indianStudentData;