var cors = require('cors')
require('dotenv').config()
const quizzRoutes = require('./routes/quizzRoute')
const authRoutes = require('./routes/authRoute')
const userRoutes = require('./routes/userRoute')
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
app.listen(process.env.PORT || 4000);




