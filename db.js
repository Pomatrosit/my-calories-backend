import pg from "pg"

const db = new pg.Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "calories",
})

export default db
