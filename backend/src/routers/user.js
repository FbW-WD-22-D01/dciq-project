import express from 'express'
import 'express-async-errors'
import * as controller from '../controllers/user.js'
import * as validations from '../lib/validators/user.js'
import auth from '../lib/middlewares/auth.js'

const app = express.Router()

app.get('/', auth, controller.getUser)
app.post('/register', validations.register, controller.register)
app.post('/login', validations.login, controller.login)

export default app