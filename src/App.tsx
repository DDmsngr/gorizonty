import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Library from './components/Library'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ backgroundColor: '#040C1E' }}>
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Library />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  )
}
