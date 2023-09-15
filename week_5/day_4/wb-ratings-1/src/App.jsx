import { NavLink, Outlet, useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import { useEffect,useState } from 'react'
import LogoutButton from './components/LogoutButton.jsx';
import axios from 'axios';

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const { loggedIn } = useLoaderData()
  const [login,setLogin] = useState(loggedIn)

  useEffect(() => {
    const getLoginStatus = async() => {
      const { data } = await axios.get('/api/session')
      if(data.loggedIn){
        setLogin(true)
      } else {
        setLogin(false)
      }
    }

    getLoginStatus()
  },[location])

  const logoutUser = async(evt) => {
    evt.preventDefault()
    const res = await axios.post('/api/logout')
    if(res.data.success){
      navigate('/')
    }
  }
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">All movies</NavLink>
          </li>
          <li>
            <NavLink to="/me">Your ratings</NavLink>
          </li>
          {
          login ? <li>
            <LogoutButton onLogout={logoutUser}/>
          </li> : <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          }
        </ul>
      </nav>

      <hr />

      <main>
        <Outlet />
      </main>
    </>
  );
}
