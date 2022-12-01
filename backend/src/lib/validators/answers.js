import {body} from 'express-validator'
import validate from '../middlewares/validation.js'

export const createAnswer = [
  body('description').isString().trim().notEmpty().withMessage('bitte gib eine Antwort ein'),
  body('question').isString().notEmpty().withMessage('question fehlt'),
  validate
]
