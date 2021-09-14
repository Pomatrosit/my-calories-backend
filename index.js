import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import noticeRouter from "./routes/notice.routes.js"
import weightRouter from "./routes/weight.routes.js"
import db from "./db.js"

dotenv.config()

const PORT = process.env.PORT || 1488

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", noticeRouter)
app.use("/", weightRouter)

const start = async () => {
  try {
    await db.query(`
        CREATE TABLE IF NOT EXISTS notices (
            id SERIAL PRIMARY KEY,
            description VARCHAR(100) NOT NULL,
            calories integer NOT NULL,
            date_add timestamp NOT NULL default current_date
        )
    `)
    await db.query(`
        CREATE TABLE IF NOT EXISTS weight (
            id SERIAL PRIMARY KEY,
            value smallint NOT NULL,
            date_add timestamp NOT NULL default current_date
        )
    `)
    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
