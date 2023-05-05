import { pool } from "../db.js";

export const createDate = async (req, res) => {
  try {
    const { name, email, number, date, time } = req.body;
    const [insertResult] = await pool.query(
      "INSERT INTO datas(name, email, number) VALUES (?, ?, ?)",
      [name, email, number]
    );
    res.json({ id: insertResult.insertId, name, email, number });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
