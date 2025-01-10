function openForm() {
    document.getElementById("account_form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("account_form").style.display = "none";
  }
  const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Example in-memory user data (replace with database in production)
const users = [
  { email: 'test@example.com', password: 'password123' }, // Example user
];

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
