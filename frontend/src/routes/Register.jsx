import {Link} from 'react-router-dom'
import './Register.scss'

export default function Register () {
  return (
    <form className='Register'>
      <h2>Registrieren</h2>
      
      <div className='input-row'>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' placeholder='Name...'/>
      </div>
      <div className='input-row'>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' placeholder='Email...'/>
      </div>
      <div className='input-row'>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' placeholder='Password...'/>
      </div>

      <Link to='/login' className='link'>
        Ich habe bereits einen Account
      </Link>

      <button>Registrieren</button>
      <span className='error'>An Error happened</span>
    </form>
  )
}