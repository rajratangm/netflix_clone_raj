import express from 'express';
import databaseConnection from './utils/database.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env' });

// Connect to the database
databaseConnection();

const app = express();
const PORT = process.env.PORT || 8080; // Set a default port if PORT is not defined in the environment variables

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
