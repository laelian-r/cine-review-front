import '../styles/Button.css'
import { NavLink } from 'react-router-dom'

export default function Buttons({ text }) {
  return (
    <>
      <NavLink to="" className="button">
        {text}
      </NavLink>
    </>
  )
}
