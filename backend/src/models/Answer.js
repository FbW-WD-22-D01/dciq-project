import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  description: { type: String, required: true },
  question: { type: mongoose.SchemaTypes.ObjectId, ref: 'question', required: true },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user', require: true },
})

const Answer = mongoose.model('answer', Schema, 'answers')

export default Answer
