const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://derick123:Tj.140220@cluster0.pamop.mongodb.net/merntutorial?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY")
})