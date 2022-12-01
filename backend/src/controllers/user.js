import httpErrors from 'http-errors'
import User from '../models/User.js'

/** @type {import("express").RequestHandler} */
export function getUser (req, res) {
  res.status(200).send(req.user)
}

/** @type {import("express").RequestHandler} */
export async function register (req, res) {
  const user = new User(req.body)
  const token = user.generateAuthToken()
  
  await user.save()

  // Optionen für Cookie 
  const cookieOptions = {
    httpOnly: true,     // cookie vom js im frontend verborgen
    secure: true,       // nur https Verbindungen
    sameSite: 'lax'     // "none", "lax" --> default, "strict"
  }

  res
  .cookie('auth-token', token, cookieOptions)
  .status(201)
  .send(user)
}

/** @type {import("express").RequestHandler} */
export async function login (req, res) {
  const {email, password} = req.body

  const user = await User.findByEmail(email)

  if(!user) throw httpErrors.Unauthorized()

  const passwordCheck = await user.checkPassword(password)

  if(!passwordCheck) throw httpErrors.Unauthorized()

  const token = user.generateAuthToken()

  await user.save()

  // Optionen für Cookie 
  const cookieOptions = {
    httpOnly: true,     // cookie vom js im frontend verborgen
    secure: true,       // nur https Verbindungen
    sameSite: 'lax'     // "none", "lax" --> default, "strict"
  }

  res
  .cookie('auth-token', token, cookieOptions)
  .status(200)
  .send(user)
}