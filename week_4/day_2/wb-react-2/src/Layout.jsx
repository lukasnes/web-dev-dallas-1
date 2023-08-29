import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/dice">Dice</Link>
          </li>
          <li>
            <Link to="/movies">Movie List</Link>
          </li>
          <li>
            <Link to="/missing-key">Missing Key Demo</Link>
          </li>
          <li>
            <Link to="/counters">Counters</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
