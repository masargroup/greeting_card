//lib/mongodb
import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  if (isConnected) {
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || '', {
      dbName: 'dataFetching', 
    });
    
    isConnected = true;
  } catch (error) {
    throw new Error('Failed to connect to MongoDB');
  }
};
