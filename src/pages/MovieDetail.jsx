import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Fetching movie with ID:', id)
    fetch(`/api/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text || `Erreur ${response.status}`)
          })
        }
        return response.json()
      })
      .then((data) => {
        setMovie(data)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [id])

  if (error) return <p>Erreur : {error}</p>
  if (!movie) return <p>Loading...</p>

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>Category: {movie.category}</p>
      <p>{movie.description}</p>
    </div>
  )
}
