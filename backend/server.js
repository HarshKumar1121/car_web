const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory user and car storage for demo
let users = [];
let cars = [
  { id: 1, brand: "Toyota", model: "Corolla", price: 700000, img: "car1.jpg", fuel: "Petrol", transmission: "Manual", year: 2020 },
  { id: 2, brand: "Honda", model: "Civic", price: 850000, img: "car2.jpg", fuel: "Diesel", transmission: "Automatic", year: 2021 },
  // Add more cars as needed!
];

// Signup Endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).send({ error: "User already exists" });
  const hashed = await bcrypt.hash(password, 8);
  users.push({ email, password: hashed });
  res.status(201).send({ msg: 'User created' });
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).send({ error: 'User not found' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send({ error: 'Invalid password' });
  // Issue JWT token
  const token = jwt.sign({ email }, 'secretkey', { expiresIn: '2h' });
  res.send({ token });
});

// Cars Endpoint (public)
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// Example Protected Endpoint
app.get('/api/profile', (req, res) => {
  const token = req.headers['authorization'];
  try {
    const decoded = jwt.verify(token, 'secretkey');
    res.send({ email: decoded.email });
  } catch {
    res.status(401).send({ error: 'Invalid token' });
  }
});

// Start Server
app.listen(4000, () => console.log("http://localhost:5000"));
