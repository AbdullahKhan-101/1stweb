const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
dotenv.config({path: './config.env'})
require('./db/conn')
// const User = require('./model/userSchema')
app.use(express.json())
app.use(cookieParser()) ;
app.use(require('./router/auth'));

const PORT = process.env.PORT;
    app.get('/', (req, res) => {
        res.send('hellow world');
    });
    
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
    