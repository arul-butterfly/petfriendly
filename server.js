const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 👉 Serve all files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit', (req, res) => {
  console.log("Form Data Received:", req.body);
  const { fullName, email, phone, city, preferredRole, reason } = req.body;
  res.send(`Thanks ${fullName}, we received your details!`);
});

// Simple test route
app.get('/api/hello', (req, res) => {
  res.json({ ok: true, message: 'Hi from the backend 👋' });
});

app.post('/api/echo', (req, res) => {
  console.log("Someone sent:", req.body);  // 👈 shows in terminal
  res.json({ youSent: req.body.text ?? null });
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
