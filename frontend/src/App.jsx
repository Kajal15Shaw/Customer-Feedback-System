import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import './App.css';

// Use environment-based backend URL
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://customer-feedback-system-f1az.onrender.com" // <-- replace with your deployed backend URL
    : "http://localhost:5000";

function App() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/feedback`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setFeedback(data);
      })
      .catch(err => console.error("Failed to fetch feedback:", err));
  }, []);

  const addFeedback = async (entry) => {
    try {
      const res = await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      });
      const newFeedback = await res.json();
      setFeedback(prev => [newFeedback, ...prev]);
    } catch (err) {
      console.error("Failed to add feedback:", err);
    }
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
