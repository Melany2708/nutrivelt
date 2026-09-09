import { useEffect, useState } from 'react'
import Icon from './Icon'
import { LogoSlot } from './MediaPlaceholder'
import { project } from '../config'

const links = [
  ['Inicio', 'inicio'], ['Nuestro producto', 'producto'], ['Ingredientes', 'ingredientes'], ['Proceso', 'proceso'],
  ['Innovación', 'innovacion'], ['Design Thinking', 'design-thinking'], ['Modelo de negocio', 'modelo-negocio'],
  ['Validación', 'validacion'], ['Galería', 'galeria'], ['Contacto', 'contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <nav className="nav-shell container" aria-label="Navegación principal">
      <a className="brand" href="#inicio" onClick={close} aria-label="Ir a inicio de NUTRIVELT">
        <LogoSlot item={project.logos.nutrivelt} label="LOGO NUTRIVELT" className="brand-mark" />
        <span>NUTRI<span>VELT</span></span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span><Icon name={open ? 'close' : 'menu'} size={24} />
      </button>
      <div className={`nav-actions ${open ? 'open' : ''}`} id="main-menu">
        <ul>{links.map(([label, id]) => <li key={id}><a href={`#${id}`} onClick={close}>{label}</a></li>)}</ul>
        <a className="button button-small nav-order" href="#contacto" onClick={close}>Pedir ahora <Icon name="arrow" size={15} /></a>
      </div>
    </nav>
  </header>
}
