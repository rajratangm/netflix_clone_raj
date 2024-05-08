// step-1 
// const express = require('express')
// in package-json write type: module 
// to use import 

import express from 'express'
import databaseConnection from './utils/database.js';

import dotenv from 'dotenv'

// databaseConnection()

dotenv.config({
    path:'.env'
})

const app = express();
const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`running at port ${PORT}`)

})

