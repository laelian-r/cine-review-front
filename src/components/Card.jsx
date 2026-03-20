import '../styles/Card.css'

import { Link } from 'react-router-dom'

export default function Card({ image, title, category, description, to }) {
  return (
    <article>
      <Link to={to}>
        <img src={image} alt={title} />
      </Link>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}
