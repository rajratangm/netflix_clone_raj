// step-1 
// const express = require('express')
// in package-json write type: module 
// to use import 

import express from 'express'
import dotevn from 'dotenv'

// databaseConnection();

dotevn.config({
    path:'.env'
})

const app = express();
const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`running at port ${PORT}`)

})

