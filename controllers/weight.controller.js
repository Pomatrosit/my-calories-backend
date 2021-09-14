import db from "../db.js"

class WeightController {
  async create(req, res) {
    try {
      const { value } = req.body
      const weight = await db.query(
        `INSERT INTO weight (value) VALUES ('${value}') RETURNING *`
      )
      res.status(200).json({ err: false, data: weight.rows[0] })
    } catch (e) {
      res.status(500).json({ err: true, message: "Неизвестная ошибка сервера" })
    }
  }

  async getAll(req, res) {
    try {
      const weight = await db.query(`SELECT * FROM weight ORDER BY id DESC LIMIT 10`)
      res.status(200).json({ err: false, data: weight.rows })
    } catch (e) {
      res.status(500).json({ err: true, message: "Неизвестная ошибка сервера" })
    }
  }
}

export default new WeightController()
