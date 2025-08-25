

import React, { useState } from 'react';

function FeedbackForm({ onAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd({ text, rating });
    setText('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <label>Rate your experience:</label>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={rating >= num ? 'active' : ''}
            onClick={() => setRating(num)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        placeholder="Write your feedback..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="3"
        required
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
