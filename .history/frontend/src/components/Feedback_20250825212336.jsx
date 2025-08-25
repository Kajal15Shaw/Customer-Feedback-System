
import React from 'react';

function Feedback({ item }) {
  return (
    <div className="card">
      <div className="stars">{"★".repeat(item.rating)}</div>
      <p>{item.text || item.message || "No message"}</p>
    </div>
  );
}

export default Feedback;
