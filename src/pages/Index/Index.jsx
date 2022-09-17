import Footer from "../../components/Footer/Footer"
import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'
import Navigation from "../../components/Navigation/Navigation"

export default function Index() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature />
        </section>
      </main>
      <Footer />
    
</>
  )
}