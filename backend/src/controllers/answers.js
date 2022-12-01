import httpErrors from 'http-errors'
import Answer from '../models/Answer.js'

/** @type {import("express").RequestHandler} */
export async function getAnswers (req, res) {
  let query = Answer.find()

  query = query.populate('user', 'name -_id')

  if(req.query.questionId) query = query.where('question').equals(req.query.questionId)

  const answers = await query

  res.status(200).send(answers)
}

/** @type {import("express").RequestHandler} */
export async function createAnswer (req, res) {
  const answer = new Answer(req.body)
  answer.user = req.user._id
  await answer.save()

  res.status(201).send(answer)
}

/** @type {import("express").RequestHandler} */
export function getAnswersCreatedByMe () {
  throw httpErrors.NotImplemented()
}