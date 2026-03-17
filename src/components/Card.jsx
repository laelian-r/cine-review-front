import '../styles/Card.css'

import { Link } from 'react-router-dom'

export default function Card({ image, title, category, to }) {
  return (
    <article>
      <Link to={to}>
        <img src={image} alt={title} />
      </Link>
      <h3>{title}</h3>
      <p>{category}</p>
    </article>
  )
}
