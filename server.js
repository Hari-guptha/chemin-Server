const express = require('express')
const mongoose = require("mongoose")
const app = express()
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }))
app.use(cors());
require("dotenv").config()


mongoose.connect( 'mongodb+srv://hariguptha:123@cluster0.7mhvdqp.mongodb.net/User?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        app.listen(process.env.PORT || 3232, () => {
            console.log('this jwt project ')
        })
        console.log('success jwt project ')
    })
    .catch((err) => { console.log(err) })

//route to login  
const login = require('./controller/login')
app.use(login)

//route to signup  
const signup = require('./controller/signup')
app.use(signup)

//route  to refresh
const refresh = require('./controller/refresh_token')
app.use(refresh)


//route  to logout
const logout = require('./controller/logout')
app.use(logout)

app.get("/holly",(req,res)=>{
    console.log("hi i am good")
})