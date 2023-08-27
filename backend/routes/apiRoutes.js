const express = require('express')
const app = express();

const userRoutes = require('./userRoutes')
const studentRoutes = require('./studentRoutes')


app.use('/user', userRoutes)
app.use('/student', studentRoutes)


module.exports = app;