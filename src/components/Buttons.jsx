import '../styles/Button.css'
import { NavLink } from 'react-router-dom'

export default function Buttons({ text }) {
  return (
    <>
      <NavLink to="" className="nav-link">
        {text}
      </NavLink>
    </>
  )
}
