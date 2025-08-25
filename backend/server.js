const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(cors());
app.use(express.json());

const FILE_PATH = './feedback.json';

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

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
