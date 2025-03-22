// models/Message.ts
import mongoose, { Schema, Document } from 'mongoose';

// Create the interface of Messages, as we need title, message, language, and userName
interface IMessage extends Document {
  title: string;
  message: string;
  language: string; 
  userName: string; 
}

// Create the schema
const messageSchema = new Schema<IMessage>({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
    default: 'Arabic', 
  },
  userName: {  
    type: String,
    required: true,
  },
}, {
  timestamps: true, 
});

// Check if the model already exists (to avoid overwriting it during hot-reloading in development)
const Message = mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema);

export default Message;
