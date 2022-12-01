import * as React from 'react'
import {Link} from 'react-router-dom'
import useUser from '../hooks/useUser'
import './Login.scss'

export default function Login () {
  const user = useUser()
  const [error, setError] = React.useState(null)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const status = await user.login(email, password)

    if(status === 200) {
      alert('logged in')
    }
    if(status === 401) {
      setError('Email oder Passwort falsch')
    }
    else {
      setError('Ein Fehler ist passiert')
    }
  }

  return (
    <form className='Login' onSubmit={handleSubmit}>
      <h2>Login</h2>
      
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

      <Link to='/register' className='link'>
        Ich habe noch keinen Account
      </Link>

      <button>Login</button>
      {error && <span className='error'>{error}</span>}
    </form>
  )
}