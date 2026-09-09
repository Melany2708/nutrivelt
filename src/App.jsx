import { useEffect, useState } from 'react'
import Header from './components/Header'
import { Hero, ProblemAndSolution, ProductAndIngredients } from './components/ProductStory'
import { DesignAndPivot, EvolutionAndProcess } from './components/Innovation'
import Business from './components/Business'
import MediaAndClosing, { Footer } from './components/MediaAndClosing'
import Icon from './components/Icon'

export default function App() {
  const [showBackTop, setShowBackTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    revealItems.forEach((item) => observer.observe(item))
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 700)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable ? (window.scrollY / scrollable) * 100 : 0)
    }
    handleScroll(); window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll) }
  }, [])
  return <>
    <div className="reading-progress" aria-hidden="true"><span style={{ transform: `scaleX(${scrollProgress / 100})` }} /></div>
    <Header />
    <main>
      <Hero />
      <ProblemAndSolution />
      <ProductAndIngredients />
      <EvolutionAndProcess />
      <DesignAndPivot />
      <Business />
      <MediaAndClosing />
    </main>
    <Footer />
    <button className={`back-top ${showBackTop ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba"><Icon name="up" size={20} /></button>
  </>
}
