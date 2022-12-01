import {body} from 'express-validator'
import validate from '../middlewares/validation.js'

export const login = [
  body('email').isEmail().withMessage('Invalide Email'),
  body('password').isString().notEmpty().withMessage('Passwort vergessen?'),
  validate
]

export const register = [
  body('email').isEmail().withMessage('Invalide Email'),
  body('password').isStrongPassword().withMessage('Passwort nicht stark genug'),
  body('name').isString().notEmpty().withMessage('wir brauchen einen Namen'),
  validate
]