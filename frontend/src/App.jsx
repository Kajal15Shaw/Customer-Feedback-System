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