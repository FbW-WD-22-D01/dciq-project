import './CreateQuestion.scss'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'

export default function CreateQuestion () {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [error, setError] = React.useState('')
  const [fetching, setFetching] = React.useState(false)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setFetching(true)
    if(error) setError('')

    const response = await axios
      .post('/questions', { title, description })
      .catch(e => e.response)

    if(response.status === 201) {
      const id = response.data._id
      navigate('/questions/' + id)
    }
    else if(response.status === 400) {
      const error = response.data.message[0] // {name: "wir brauchen einen Namen"}
      const key = Object.keys(error)[0] // name
      const message = error[key] // "wir brauchen einen Namen"
      setError(message)
    }
    else if(response.status === 401) {
      setError('Du bist nicht eingeloggt')
    }
    else {
      setError('Etwas ist schief gelaufen')
    }
    setFetching(false)
  }

  return (
    <form className='Create-Question' onSubmit={handleSubmit}>
      <h1>Frage stellen</h1>

      <label htmlFor="title">Überschrift</label>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type='text'
        id='title'
        placeholder="Überschrift...."
      />

      <label htmlFor="description">Beschreibung</label>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        id="description"
        rows={10}
        placeholder='Tippen Sie hier'
      />

      <button>{fetching ? 'loading...' : 'Abschicken'}</button>
      {error && <span className='error'>{error}</span>}
    </form>
  )
}