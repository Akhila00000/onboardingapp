const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string (URL-encoded password)
const mongoURI = 'mongodb+srv://Akhila_2006:Akhila%402006@cluster0.2apurs7.mongodb.net/onboarding-app?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Sample API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Add more routes here in future, like: app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
