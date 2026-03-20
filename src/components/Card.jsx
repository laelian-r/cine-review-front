import '../styles/Card.css'

import { Link, NavLink } from 'react-router-dom'

export default function Card({ image, title, category, description, to }) {
  return (
    <article>
      <NavLink className="nav-link" to={to}>
        <img src={image} alt={title} />
      </NavLink>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{category}</p>
        <p className="description">{description}</p>
      </div>
    </article>
  )
}
