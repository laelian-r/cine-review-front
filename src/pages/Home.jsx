import { useEffect, useState } from 'react'
import Card from '../components/Card'
import '../styles/Home.css'

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
  }, [])

  return (
    <section className="home-section">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          image={movie.image}
          title={movie.title}
          to={`/movies/${movie.id}`}
        />
      ))}
    </section>
  )
}
