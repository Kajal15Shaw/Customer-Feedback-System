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
FeedbackStats.jsx

Details

Activity

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
Feedba ... ts.jsx
Open...
 Share

Ask Gemini

Displaying FeedbackStats.jsx.