import express from 'express'
import 'express-async-errors'
import * as controller from '../controllers/questions.js'
import * as validations from '../lib/validators/questions.js'
import auth from '../lib/middlewares/auth.js'

const app = express.Router()

app.get('/', controller.getQuestions)
app.post('/', auth, validations.createQuestion, controller.createQuestion)
app.get('/:id', controller.getQuestionById)
// questions/my-id

export default app