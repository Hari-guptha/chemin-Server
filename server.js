'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const io = require('socket.io');
const port = process.env.PORT || 3000
mongoose.set('strictQuery', false);
const mongo = 'mongodb+srv://chemin:chemingb@cluster0.7mhvdqp.mongodb.net/bems?retryWrites=true&w=majority'

mongoose.connect(mongo,{useNewUrlParser : true, useUnifiedTopology : true}).then(()=>{
    console.log('database connected');
    app.listen(port,()=>{
        console.log(`server connected on port ${port}`);
    })
})

io.on('connection',socket =>{
    console.log(socket.id);
})
