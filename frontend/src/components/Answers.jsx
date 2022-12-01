import './Answers.scss'
import React from 'react'
import axios from 'axios'

export default function Answers ({questionId}) {
  const [answers, setAnswers] = React.useState(null)
  const [answer, setAnswer] = React.useState('')
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    axios.get('/answers?questionId='+questionId).then(response => setAnswers(response.data))
  }, [questionId])

  const handleSubmit = async e => {
    e.preventDefault()
    const body = {
      question: questionId,
      description: answer
    }
    const response = await axios
      .post('/answers', body)
      .catch(e => e.response)

    if(response.status === 201) {
      setAnswer('')
      axios.get('/answers?questionId='+questionId)
        .then(response => setAnswers(response.data))
    }
    else if (response.status === 400) {
      setError('konnte nicht gespeichert werden')
    }
    else if (response.status === 401) {
      setError('du bist nicht eingeloggt')
    }
    else {
      setError('konnte nicht gespeichert werden')
    }
  }

  return (
    <div className='Answers'>
      {answers && answers.length === 0 && (
        <p>Keine Antworten verfügbar</p>
      )}

      {answers && answers.length > 0 && (
        <div className='list'>
          {answers.map(row => (
            <div className='answer' key={row._id}>
              <div className='description'>{row.description}</div>
              <div className='user'>{row.user.name}</div>
            </div>
          ))}
        </div>
      )}

      <hr/>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          placeholder='Antwort eingeben'
          rows={10}
        />
        <button>Antworten</button>
        {error && <span className='error'>{error}</span>}
      </form>
    </div>
  )
}