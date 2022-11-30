import './Layout.scss'

export default function Layout ({children}) {
  return (
    <div className='Layout'>
      <div className='header'>
        <div className='logo'>dciQ</div>
        <button>LOGIN</button>
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}