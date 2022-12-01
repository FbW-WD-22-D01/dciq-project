import {useParams} from 'react-router'

export default function QuestionById () {
  const { id } = useParams()
  
  return <h1>QuestionById: {id}</h1>
}