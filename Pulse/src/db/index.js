import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
const connectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MongoDB Connection Successful: ${conectionInstance.connection.host}`); // What is this ?
        // This will print the host name of the database to which we are connected.

    } catch (error) {
        console.log(`MongoDB Connection Error: ${error.message}`);
        // throw error;
        process.exit(1);// What is this ?
        // This will stop the server from starting if there is an error in the database connection.
    }
}
export default connectDB;