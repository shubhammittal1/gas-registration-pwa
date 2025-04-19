const db = require('../models/db');

exports.registerUser = async (req, res) => {
  let { role, name, mobile, orgName, orgType, address, gst } = req.body;

  let pin ="teraconnect@123";

  // Validate fields for undefined
  role = role || null;
  name = name || null;
  mobile = mobile || null;
  orgName = orgName || null;
  orgType = orgType || null;
  address = address || null;
  gst = gst || null;

 

  try {
    const [userResult] = await db.execute('INSERT INTO users (name, mobile_number, role, pin) VALUES (?, ?, ?, ?)', [name, mobile, role, pin]);
    const userId = userResult.insertId;
    await db.execute('INSERT INTO organizations (name, type, address, gst_number, user_id) VALUES (?, ?, ?, ?, ?)', [orgName, orgType, address, gst, userId]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};