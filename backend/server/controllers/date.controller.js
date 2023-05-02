import { pool } from "../db.js";

export const getDate = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM pruebas ORDER BY date ASC",
      []
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDate = async (req, res) => {
  try {
    const { name, email, number, date } = req.body;
    const [result] = await pool.query(
      "INSERT INTO pruebas(name, email, number, date) VALUES (?, ?, ?, ?)",
      [name, email, number, date]
    );
    res.json({ id: result.insertId, name, email, number, date });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
