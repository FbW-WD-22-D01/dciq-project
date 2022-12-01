import {body} from 'express-validator'
import validate from '../middlewares/validation.js'

export const createQuestion = [
  body('title').isString().trim().notEmpty().withMessage('bitte gib einen Titel an'),
  body('description').isString().trim().notEmpty().withMessage('beschreibe doch dein Problem'),
  validate
]
