import About from '../components/About'
import BMICalculator from '../components/BMICalculator'
import Contact from '../components/Contact'
import FloatingActions from '../components/FloatingActions'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Plans from '../components/Plans'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Trainers from '../components/Trainers'
import WhyChooseUs from '../components/WhyChooseUs'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Plans />
        <Trainers />
        <Gallery />
        <Testimonials />
        <BMICalculator />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default Home
