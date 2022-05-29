const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')

const app =express();
app.use(cors())
app.use(express.json());

//PORT

const PORT =process.env.PORT || 5500

// routes
const TodoItemRoute = require('./routes/todoItems')

// connect to mongo

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log('data connected'))
.catch(err => console.log(err))

app.use("/", TodoItemRoute);

app.listen(PORT ,()=> console.log('connect to server'))