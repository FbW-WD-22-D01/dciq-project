import React from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import Answers from '../components/Answers'
import './QuestionById.scss'

export default function QuestionById () {
  const { id } = useParams()
  const [question, setQuestion] = React.useState(null)

  React.useEffect(() => {
    axios.get('/questions/'+id).then(response => setQuestion(response.data))
  }, [id])

  

  if(!question) return null
  
  return (
    <div className='QuestionById'>
      <h1>{question.title}</h1>
      <p>{question.description}</p>
      <div className='user-name'>{question.user.name}</div>

      <hr/>

      <Answers questionId={id}/>
      
    </div>
  )
}