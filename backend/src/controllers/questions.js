import httpErrors from 'http-errors'

/** @type {import("express").RequestHandler} */
export function getQuestions () {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export function createQuestion () {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export function getQuestionById () {
  throw httpErrors.NotImplemented()
}