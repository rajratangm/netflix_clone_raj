import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path: "../.env"
})
const databaseConnection =  () => {
    try {mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(`error is --${error}`);
    }
};

export default databaseConnection;
