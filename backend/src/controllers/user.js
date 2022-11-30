import httpErrors from 'http-errors'

/** @type {import("express").RequestHandler} */
export function getUser () {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export function register () {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export function login () {
  throw httpErrors.NotImplemented()
}