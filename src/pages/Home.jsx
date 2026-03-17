import '../styles/Home.css'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <h1>Cine Review</h1>
      <section>
        <Card
          image="https://cinedweller.com/wp-content/uploads/2024/12/DRAGONS_120_DECLI3.jpg"
          title="Dragon"
          to="/movie/1"
        />
        <Card
          image="https://fr.web.img6.acsta.net/c_310_420/img/fa/90/fa90ab7c0b300af60d9cc5dc36deef3f.jpg"
          title="Le Parc"
          to="/movie/2"
        />
      </section>
    </>
  )
}
