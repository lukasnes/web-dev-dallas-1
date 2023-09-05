import logo from '../../images/dm_white_logo.png';
import './Nav.css';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="Nav">
      <div>
        <img src={logo} alt="dm logo" />
      </div>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/topics'>
            Topics
          </Link>
        </li>
      </ul>
    </div>
  );
}
