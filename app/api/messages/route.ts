// app/api/messages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '../../../lib/mongodb'; // MongoDB connection
import Message from '../../../models/Message'; // Message model

export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await connectToDB();

    // Get the data from the request body
    const {message, userName } = await req.json();

    // Check if all required fields are present
    if (!message || !userName) {
      return NextResponse.json(
        { error: 'All fields (message, userName) are required' },
        { status: 400 }
      );
    }

    // Create a new message document
    const newMessage = new Message({
      message,
      userName,
    });

    // Save the message in MongoDB
    await newMessage.save();

    // Return a success response
    return NextResponse.json(
      { message: 'Message generated and saved successfully!' },
      { status: 200 }
    );
  } catch (error) {
    // Handle errors and return an error response
    console.error(error);
    return NextResponse.json({ error: 'Error saving message' }, { status: 500 });
  }
}