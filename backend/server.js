import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()

const { PORT, DB_CONN } = process.env

mongoose.connect(DB_CONN)
.then(() => console.log('Datenbank läuft'))
.catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))


const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use((req, res, next) => {
  next({
    status: 404,
    message: 'not-found'
  })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message
  })
})



app.listen(PORT, () => console.log('listening on port', PORT))