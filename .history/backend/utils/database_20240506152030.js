import mongoose from "mongoose";

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(`error is --`);
    }
};

export default databaseConnection;
