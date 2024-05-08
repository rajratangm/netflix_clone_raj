import mongoose from "mongoose"
const databaseConnection =()=>{
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            conole.log()
        })
    
}