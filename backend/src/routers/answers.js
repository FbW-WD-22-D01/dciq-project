import express from 'express'
import 'express-async-errors'
import * as controller from '../controllers/answers.js'

const app = express.Router()

app.get('/', controller.getAnswers)
app.post('/', controller.createAnswer)
app.get('/created-by-me', controller.getAnswersCreatedByMe)

export default app