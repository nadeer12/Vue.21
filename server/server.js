const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

// In-memory storage for registered users
const users = [];

app.post('/api/register', (req, res) => {
  try {
    const { name, publicKey } = req.body;

    // Validate the request payload
    if (!name || !publicKey) {
      return res.status(400).json({ error: 'Invalid request payload' });
    }

    // Check if the user is already registered
    const existingUser = users.find(user => user.name === name);
    if (existingUser) {
      return res.status(400).json({ error: 'User already registered' });
    }

    // Store the public key along with the user's identifier in memory
    users.push({
      name,
      publicKey,
    });

    // Respond with a success message
    return res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
