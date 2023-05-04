import { pool } from "../db.js";

export const getDate = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM pruebas", []);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDate = async (req, res) => {
  try {
    const { name, email, number, date, time } = req.body;

    const [result] = await pool.query(
      "SELECT COUNT(*) as count FROM pruebas WHERE date = ? AND time = ?",
      [date, time]
    );
    const count = result[0].count;

    if (count > 0) {
      // Ya existe un registro con la misma fecha y hora, devuelve un error
      return res
        .status(400)
        .json({ message: "Ya existe un registro para esa fecha y hora." });
    }

    const [insertResult] = await pool.query(
      "INSERT INTO pruebas(name, email, number, date, time) VALUES (?, ?, ?, ?, ?)",
      [name, email, number, date, time]
    );
    res.json({ id: insertResult.insertId, name, email, number, date, time });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
