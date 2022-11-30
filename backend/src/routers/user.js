import express from 'express'
import 'express-async-errors'
import * as controller from '../controllers/user.js'

const app = express.Router()

app.get('/', controller.getUser)
app.post('/register', controller.register)
app.post('/login', controller.login)

export default app