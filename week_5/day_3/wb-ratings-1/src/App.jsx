import { NavLink, Outlet } from 'react-router-dom';
import LogoutButton from './components/LogoutButton.jsx';

export default function App() {
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
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/me">Your ratings</NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>

      <hr />

      <main>
        <Outlet />
      </main>
    </>
  );
}
