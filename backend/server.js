import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import user from './src/routers/user.js'
import answers from './src/routers/answers.js'
import questions from './src/routers/questions.js'

dotenv.config()

const { PORT, DB_CONN } = process.env

mongoose.connect(DB_CONN)
.then(() => console.log('Datenbank läuft'))
.catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))


const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/user', user)
app.use('/answers', answers)
app.use('/questions', questions)

app.use((req, res, next) => {
  next({
    status: 404,
    message: 'not-found'
  })
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message
  })
})



app.listen(PORT, () => console.log('listening on port', PORT))