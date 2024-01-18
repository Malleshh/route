// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className="image-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h3>Wave</h3>
    </div>
    <ul>
      <li>
        <Link className="list-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="list-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="list-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
