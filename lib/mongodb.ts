import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
  if (isConnected) {
    console.log('Already connected to MongoDB.');
    return;
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'greetingcard',
    });

    isConnected = true;
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};
