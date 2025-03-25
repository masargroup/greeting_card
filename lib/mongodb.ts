//lib/mongodb
import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  if (isConnected) {
    // console.log('MongoDB is already connected');
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || '', {
      dbName: 'dataFetching', // The name of the database I've created
    });
    
    isConnected = true;
    // console.log('MongoDB connected successfully');
  } catch (error) {
    // console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};
