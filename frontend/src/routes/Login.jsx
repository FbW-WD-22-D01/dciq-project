import {Link} from 'react-router-dom'
import './Login.scss'

export default function Login () {

  return (
    <form className='Login'>
      <h2>Login</h2>
      
      <div className='input-row'>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' placeholder='Email...'/>
      </div>
      <div className='input-row'>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' placeholder='Password...'/>
      </div>

      <Link to='/register' className='link'>
        Ich habe noch keinen Account
      </Link>

      <button>Login</button>
      <span className='error'>An Error happened</span>
    </form>
  )
}