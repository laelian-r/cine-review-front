import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import '../styles/MovieDetail.css'

export default function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [id])

  if (!movie) return <p>Chargement...</p>

  return (
    <section className="movie-detail-section">
      <Card
        key={movie.id}
        image={movie.image}
        title={movie.title}
        category={movie.category}
        description={movie.description}
      />
    </section>
  )
}
