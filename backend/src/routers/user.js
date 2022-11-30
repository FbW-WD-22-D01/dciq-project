import express from 'express'
import 'express-async-errors'
import * as controller from '../controllers/user.js'
import * as validations from '../lib/validators/user.js'

const app = express.Router()

app.get('/', controller.getUser)
app.post('/register', validations.register, controller.register)
app.post('/login', validations.login, controller.login)

export default app