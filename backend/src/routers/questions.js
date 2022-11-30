import express from 'express'
import 'express-async-errors'
import * as controller from '../controllers/questions.js'

const app = express.Router()

app.get('/', controller.getQuestions)
app.post('/', controller.createQuestion)
app.get('/:id', controller.getQuestionById)

export default app