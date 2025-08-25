
import React from 'react';
import Feedback from './Feedback';

function FeedbackList({ feedback }) {
  return (
    <div className="feedback-list">
      {feedback.length === 0 ? (
        <p>No feedback yet</p>
      ) : (
        feedback.map(item => <Feedback key={item.id} item={item} />)
      )}
    </div>
  );
}

export default FeedbackList;
