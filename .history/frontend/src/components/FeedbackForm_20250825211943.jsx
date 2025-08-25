Closed

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
components



Ask Gemini
Explore these files

1 Selected
Name

More sorting options
FeedbackStats.jsx

More actions (Alt+A)
FeedbackList.jsx

More actions (Alt+A)
FeedbackForm.jsx

More actions (Alt+A)
Feedback.jsx

More actions (Alt+A)
Text
FeedbackForm.jsx

Details

Activity

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
