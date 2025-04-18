const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const registerRoutes = require('./routes/registerRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/register', registerRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});