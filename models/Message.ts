// models/Message.ts
import mongoose, { Schema, Document } from 'mongoose';

// Create the interface of Messages, as we need title, message, language, and userName
interface IMessage extends Document {
  message: string;
  userName: string; 
  urlSelected: string;
}

// Create the schema
const messageSchema = new Schema<IMessage>({
  message: {
    type: String,
    required: true,
  },
  userName: {  
    type: String,
    required: true,
  },
  urlSelected: {
    type: String,
  }
}, {
  timestamps: true, 
});

// Check if the model already exists (to avoid overwriting it during hot-reloading in development)
const Message = mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema);

export default Message;
