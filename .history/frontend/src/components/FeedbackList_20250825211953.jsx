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
FeedbackList.jsx

Details

Activity

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
