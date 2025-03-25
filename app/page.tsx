// app/page.tsx
'use client';

import { useState } from 'react';

export default function Page() {
    // Use the following code to get the data and then send it to the database, I have put them to make it easy so who gonna do the rest of the code will know how to do it.
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [url, setUrl] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, userName, url }),
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
