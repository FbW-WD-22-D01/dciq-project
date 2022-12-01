import httpErrors from 'http-errors'

/** @type {import("express").RequestHandler} */
export function getAnswers () {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export function createAnswer () {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export function getAnswersCreatedByMe () {
  throw httpErrors.NotImplemented()
}