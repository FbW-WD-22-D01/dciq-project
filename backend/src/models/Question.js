import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, enum:['JS', 'HTML', 'CSS'],  required: true },
  numAnswers: { type: Number, required: true },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user', required: true }
})

const Question = mongoose.model('question', Schema, 'questions')

export default Question