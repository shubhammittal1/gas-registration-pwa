const db = require('../models/db');

exports.signIn = async (req, res) => {
  const { mobile, pin } = req.body;
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE mobile_number = ? AND pin = ?', [mobile, pin]);
    if (rows.length) return res.json({ success: true, user: rows[0] });
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};