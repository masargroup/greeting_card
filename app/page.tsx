// app/page.tsx
'use client';

import { useState } from 'react';

export default function Page() {

  // Use the following code to get the data and then send it to the database, I have put them to make it easy so who gonna do the rest of the code will know how to do it.
  // Also, remember that I put a default value for the language as Arabic in case you do no want to use it later, so this will make this field in the data saves as we need it.
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('Arabic'); 
  const [userName, setUserName] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, message, language, userName }),
    });

    if (response.ok) {
      setStatusMessage('Message saved successfully!');
    } else {
      const errorData = await response.json();
      setStatusMessage(errorData.error || 'Failed to save the message');
    }
  };

  return (
    <div>
      
    </div>
  );
}
