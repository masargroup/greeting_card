// lib/database.ts
import mongoose, { Schema, model, models } from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'ecommerce_db', // Changed to more appropriate db name
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });

    isConnected = true;
    console.log('New database connection established');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

// Product Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: {
      values: ['Electronics', 'Clothing', 'Home', 'Books', 'Other'],
      message: '{VALUE} is not a valid category'
    }
  },
  stockQuantity: {
    type: Number,
    required: true,
    default: 0,
    min: [0, 'Stock quantity cannot be negative']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Add index for better query performance
productSchema.index({ name: 'text', description: 'text' });

// Middleware to update the updatedAt field before saving
productSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const Product = models.Product || model('Product', productSchema);