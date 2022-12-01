import * as React from 'react'
import axios from 'axios'

const Context = React.createContext({
  data: null,
  loading: false,
  register: async () => 500,
  login: async () => 500
})


export function UserProvider ({children}) {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    axios.get('/user')
      .then(response =>  setUser(response.data))
      .catch(() => null)
      .finally(() => setLoading(false))
  }, [])

  const ctx = {
    data: user,
    loading: loading,
    register: async () => null,
    login: async (email, password) => {
      // gleiches nur andere Schreibweise
      // const response = await axios
      //   .post('/user/login', { email, password })
      //   .catch(e => e.response)

      // const status = response.status

      // if(status === 200) setUser(response.data)

      // return status
      
      try {
        const response = await axios.post('/user/login', { email, password })
        setUser(response.data)
        return 200
      }
      catch(e) {
        if(e.response) {
          return e.response.status
        }
        return 500
      }
    },
  }

  return (
    <Context.Provider value={ctx}>
      {children}
    </Context.Provider>
  )
}


export default function useUser() {
  return React.useContext(Context)
}