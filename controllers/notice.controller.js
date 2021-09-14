import db from "../db.js"

class NoticeController {
  async create(req, res) {
    try {
      const { description, calories } = req.body
      const notice = await db.query(
        `INSERT INTO notices (description, calories) VALUES ('${description}', '${calories}') RETURNING *`
      )
      res.status(200).json({ err: false, data: notice.rows[0] })
    } catch (e) {
      res.status(500).json({ err: true, message: "Неизвестная ошибка сервера" })
    }
  }

  async get(req, res) {
    try {
      const { date } = req.body
      let notices
      if (date)
        notices = await db.query(
          `SELECT * FROM notices WHERE date_add = '${date}'`
        )
      else notices = await db.query(`SELECT * FROM notices`)

      res.status(200).json({ err: false, data: notices.rows })
    } catch (e) {
      res.status(500).json({ err: true, message: "Неизвестная ошибка сервера" })
    }
  }
}

export default new NoticeController()
