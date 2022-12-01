import * as React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useUser from '../hooks/useUser'
import './Register.scss'

export default function Register () {
  const user = useUser()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [fetching, setFetching] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
    if(user.data && !user.loading) {
      navigate('/account')
    }
  }, [user])

  const handleSubmit = async e => {
    e.preventDefault()
    setFetching(true)
    const result = await user.register(email, password, name)

    if(result.status === 201) {
      navigate('/account')
    }
    else if(result.status === 400) {
      setError(result.payload)
    }
    else {
      setError('Etwas ist schief gelaufen')
    }

    setFetching(false)
  }

  return (
    <form className='Register' onSubmit={handleSubmit}>
      <h2>Registrieren</h2>
      
      <div className='input-row'>
        <label htmlFor='name'>Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          id='name'
          type='text'
          placeholder='Name...'
        />
      </div>
      <div className='input-row'>
        <label htmlFor='email'>Email</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          id='email'
          type='email'
          placeholder='Email...'
        />
      </div>
      <div className='input-row'>
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          id='password'
          type='password'
          placeholder='Password...'
        />
      </div>

      <Link to='/login' className='link'>
        Ich habe bereits einen Account
      </Link>

      <button>{fetching ? 'loading...' : 'Registrieren'}</button>
      {error && <span className='error'>{error}</span>}
    </form>
  )
}