const db = require('../models/db');

exports.registerUser = async (req, res) => {
  const { role, name, mobile, orgName, orgType, address, gst } = req.body;
  try {
    const [userResult] = await db.execute('INSERT INTO users (name, mobile_number, role) VALUES (?, ?, ?)', [name, mobile, role]);
    const userId = userResult.insertId;
    await db.execute('INSERT INTO organizations (name, type, address, gst_number, user_id) VALUES (?, ?, ?, ?, ?)', [orgName, orgType, address, gst, userId]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};