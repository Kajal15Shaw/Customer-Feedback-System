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
backend



Ask Gemini
Explore these files

1 Selected
Name

More sorting options
node_modules

More actions (Alt+A)
server.js

More actions (Alt+A)
Unknown
package.json

More actions (Alt+A)
Unknown
package-lock.json

More actions (Alt+A)
Unknown
feedback.json

More actions (Alt+A)
Javascript
server.js

Details

Activity

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const FILE_PATH = './feedback.json';

// GET all feedback
app.get('/api/feedback', (req, res) => {
  const data = fs.existsSync(FILE_PATH) ? JSON.parse(fs.readFileSync(FILE_PATH)) : [];
  res.json(data);
});

// POST new feedback
app.post('/api/feedback', (req, res) => {
  const feedback = fs.existsSync(FILE_PATH) ? JSON.parse(fs.readFileSync(FILE_PATH)) : [];
  const newEntry = { id: Date.now(), ...req.body };
  feedback.unshift(newEntry);
  fs.writeFileSync(FILE_PATH, JSON.stringify(feedback, null, 2));
  res.status(201).json(newEntry);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
