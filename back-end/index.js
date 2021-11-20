var cors = require('cors')
require('dotenv').config()
var multer = require('multer');
const quizzRoutes = require('./routes/quizzCtrl')
const authRoutes = require('./routes/authCtrl')
const userRoutes = require('./routes/userCtrl')
const uploadRoutes = require('./routes/uploadCtrl')
require('./data/connect')
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use(cors())
app.use('/static', express.static(__dirname + '/uploads'));
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/quizz', quizzRoutes);
app.use('/api/upload', uploadRoutes);

app.listen(process.env.PORT || 4000);




