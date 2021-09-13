import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 1488

const app = express()

app.use(express.json())
app.use(cors())

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
