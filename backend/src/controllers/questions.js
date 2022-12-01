import httpErrors from 'http-errors'
import Question from '../models/Question.js'

/** @type {import("express").RequestHandler} */
export function getQuestions () {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export async function createQuestion (req, res) {
  const question = new Question(req.body)
  question.user = req.user._id
  question.numAnswers = 0
  await question.save()
  res.status(201).send(question)
}

/** @type {import("express").RequestHandler} */
export async function getQuestionById (req, res) {
  const id = req.params.id
  const question = await Question.findById(id).populate('user', 'name')
  res.status(200).send(question)
}