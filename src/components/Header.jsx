import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import Buttons from './Buttons'

export default function Header() {
  return (
    <>
      <header>
        <a href="/movies">
          <h1>CineReview</h1>
        </a>
        <nav>
          <ul>
            <li>
              <NavLink to="/login">Connexion</NavLink>
            </li>
            <li>
              <NavLink to="/register" className="sign-up">
                Inscription
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
