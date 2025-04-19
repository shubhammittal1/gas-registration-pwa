const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const registerRoutes = require('./routes/registerRoutes');
const db = require('./models/db');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/register', registerRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

db.getConnection()
  .then(async (conn) => {
    const [rows] = await conn.query('SELECT DATABASE() AS db');
    console.log(`Connected to Database: ${rows[0].db}`);
    conn.release();
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
  });