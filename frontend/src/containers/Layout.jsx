import { Link } from 'react-router-dom'
import './Layout.scss'
import useUser from '../hooks/useUser'

export default function Layout ({children}) {
  const user = useUser()

  return (
    <div className='Layout'>
      <div className='header'>
        <div className='logo'>dciQ</div>
        <div className='spanner'/>
        {!user.data && (
          <Link to='/login'>
            LOGIN
          </Link>
        )}
        {user.data && (
          <>
            <span className='user'>{user.data.name}</span>
            <Link to='/create-question'>
              CREATE QUESTION
            </Link>
          </>
        )}
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}