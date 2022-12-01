import './App.scss'
import {Route, Routes} from 'react-router-dom'
import Account from './routes/Account'
import CreateQuestion from './routes/CreateQuestion'
import Login from './routes/Login'
import Overview from './routes/Overview'
import QuestionById from './routes/QuestionById'
import Register from './routes/Register'
import Layout from './containers/Layout'
import { UserProvider } from './hooks/useUser'


export default function App() {
  return (
    <UserProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='/question/:id' element={<QuestionById/>}/>
            <Route path='/create-question' element={<CreateQuestion/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>
        </Layout>
      </div>
    </UserProvider>
  )
}
