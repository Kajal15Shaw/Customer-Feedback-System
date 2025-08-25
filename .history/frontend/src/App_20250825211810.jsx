Maximized

Skip to main content

Keyboard shortcuts

Accessibility feedback

Drive
Search in Drive


Ask Gemini


New
Folders and views
Home
My Drive
Computers
Shared with me
Recent
Starred
Spam
Trash
Storage
2.54 GB of 2 TB used
Get more storage
Get Drive for desktop
Download
Folder Path
src



Ask Gemini
Explore these files

1 Selected
Name

More sorting options
components

More actions (Alt+A)
assets

More actions (Alt+A)
main.jsx

More actions (Alt+A)
index.js

More actions (Alt+A)
index.css

More actions (Alt+A)
App.jsx

More actions (Alt+A)
App.css

More actions (Alt+A)
Text
App.jsx

Details

Activity

import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
  fetch('http://localhost:5000/api/feedback')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched data:', data);
      setFeedback(data);
    });
}, []);

  const addFeedback = async (entry) => {
    const res = await fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
    const newFeedback = await res.json();
    setFeedback(prev => [newFeedback, ...prev]);
  };

  return (
    <div className="container">
      <h1>Customer Feedback System</h1>
      <FeedbackForm onAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;