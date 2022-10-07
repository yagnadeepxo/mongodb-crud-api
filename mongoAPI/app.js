const express = require('express')
const mongoose = require('mongoose')

const app = express()
const url = "mongodb+srv://<username>:<password>@demo-cluster.wf8giki.mongodb.net/?retryWrites=true&w=majority"
app.listen(3000,()=>{console.log('server up')})

mongoose.connect(url) 

const con = mongoose.connection

app.use(express.json())

con.on('open',()=>{console.log("db connected")})

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

