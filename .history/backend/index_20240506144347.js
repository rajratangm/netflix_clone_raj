// step-1 
// const express = require('express')
// in package-json write type: module 
// to use import 

import express from 'express'
import dotevn from 'dotenv'
dotevn.config({
    path:''
})

const app = express();
const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log('thih')

})

