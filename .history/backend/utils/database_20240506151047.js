import mongoose from "mongoose"
const databaseConnection = async()=>{
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            conole.log('mongoDB connected Successfully')
        }).catch((error)=>{})
        }
    
}