import React from 'react';

function FeedbackStats({ feedback }) {
  const total = feedback.length;
  const avg = total === 0 ? 0 : (feedback.reduce((sum, f) => sum + f.rating, 0) / total).toFixed(1);

  return (
    <div className="stats">
      <p>Total Feedback: {total}</p>
      <p>Average Rating: {avg}</p>
    </div>
  );
}

export default FeedbackStats;
