const express = require('express');
const router = express.Router();
const { signIn } = require('../controllers/authController');
const db = require('../models/db');

router.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT DATABASE() AS db, NOW() AS time');
    res.json({ success: true, database: rows[0].db, time: rows[0].time });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/signin', signIn);

module.exports = router;