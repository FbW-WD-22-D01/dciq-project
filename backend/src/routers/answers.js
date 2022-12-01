import express from 'express'
import 'express-async-errors'
import * as controller from '../controllers/answers.js'
import * as validation from '../lib/validators/answers.js'
import auth from '../lib/middlewares/auth.js'

const app = express.Router()

app.get('/', controller.getAnswers)
app.post('/', auth, validation.createAnswer, controller.createAnswer)
app.get('/created-by-me', controller.getAnswersCreatedByMe)

export default app