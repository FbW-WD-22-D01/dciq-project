import User from '../../models/User.js'
import httpErrors from 'http-errors'

/** @type {import("express").RequestHandler} */
export default async function auth (req, res, next) {
  const token = req.cookies['auth-token']

  if(!token) throw httpErrors.Unauthorized()

  const user = await User.findByAuthToken(token)

  if(!user) throw httpErrors.Unauthorized()

  req.user = user

  next()
}