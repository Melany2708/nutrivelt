import { useEffect, useState } from 'react'
import Icon from './Icon'
import { MediaPlaceholder } from './MediaPlaceholder'
import SectionHeading from './SectionHeading'
import { ingredients, media, project } from '../config'

const problems = [
  ['heart', 'Alimentación poco saludable', 'En muchos espacios educativos existen pocas alternativas de snacks saludables y nutritivos.'],
  ['cube', 'Snacks con bajo aporte nutritivo', 'La propuesta responde a la necesidad de ampliar las opciones disponibles durante la jornada.'],
  ['coin', 'Opciones poco accesibles', 'Los productos saludables pueden resultar costosos para parte del público escolar.'],
  ['target', 'Una alternativa cercana', 'El reto fue pensar en una opción agradable, accesible y nutritiva.'],
]
const solution = [
  ['leaf', 'Snack nutritivo', 'Una propuesta que reúne ingredientes como camote, zapallo y harina de garbanzo.'],
  ['coin', 'Precio accesible', 'Una presentación individual y una promoción para acercar el producto.'],
  ['sparkle', 'Ingredientes naturales', 'Una receta con verduras, harinas, huevos, panela y especias.'],
  ['oven', 'Artesanal y horneado', 'La técnica final del proyecto cambia hacia el horneado.'],
]

function IngredientModal({ ingredient, onClose }) {
  useEffect(() => {
    if (!ingredient) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [ingredient, onClose])
  if (!ingredient) return null
  return <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="ingredient-modal-title">
    <button className="modal-backdrop" onClick={onClose} aria-label="Cerrar detalle del ingrediente" />
    <article className="ingredient-modal">
      <button className="icon-button close-modal" onClick={onClose} aria-label="Cerrar"><Icon name="close" /></button>
      <div className="ingredient-modal-icon"><Icon name={ingredient.icon} size={36} /></div>
      <span className="eyebrow">INGREDIENTE DE LA RECETA</span>
      <h3 id="ingredient-modal-title">{ingredient.name}</h3>
      <div className="modal-detail"><strong>Función en la receta</strong><p>{ingredient.role}</p></div>
      <div className="modal-detail"><strong>Aporte descrito en el proyecto</strong><p>{ingredient.nutrition}</p></div>
      <div className="asset-chip"><Icon name="image" size={15} /> {ingredient.asset}</div>
    </article>
  </div>
}

export function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="container hero-grid">
      <div className="hero-copy reveal">
        <div className="hero-kicker"><span className="pulse-dot" /> PROYECTO ESCOLAR DE EMPRENDIMIENTO · 2026</div>
        <h1>NUTRI<span>VELT</span></h1>
        <p className="hero-tagline">{project.tagline}</p>
        <p className="hero-description">{project.description}</p>
        <div className="hero-buttons"><a className="button" href="#producto">Conoce NUTRIVELT <Icon name="arrow" size={17} /></a><a className="text-button" href="#proceso">Ver proceso <Icon name="down" size={17} /></a></div>
        <div className="hero-meta"><span><Icon name="leaf" size={16} /> Artesanal</span><span><Icon name="oven" size={16} /> Horneada</span><span><Icon name="heart" size={16} /> Propuesta nutritiva</span></div>
      </div>
      <div className="hero-visual reveal delay-1">
        <div className="hero-photo-frame"><MediaPlaceholder item={media.hero} icon="image" /></div>
        <div className="floating-note note-top"><Icon name="sparkle" size={17} /><span>Camote<br />+ zapallo</span></div>
        <div className="floating-note note-bottom"><Icon name="grain" size={17} /><span>Harina de<br />garbanzo</span></div>
        <div className="cookie-shape" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      </div>
    </div>
    <a href="#problema" className="scroll-cue" aria-label="Ver el problema"><span /> Descubre la historia</a>
  </section>
}

export function ProblemAndSolution() {
  return <>
    <section id="problema" className="section problem-section">
      <div className="container">
        <SectionHeading eyebrow="01 · EL ORIGEN" title="¿Por qué nace NUTRIVELT?">El proyecto surge al identificar que en muchos espacios educativos existen pocas alternativas de snacks saludables y nutritivos.</SectionHeading>
        <div className="problem-grid">{problems.map(([icon, title, text], index) => <article className={`problem-card reveal delay-${index % 3}`} key={title}><span className="card-icon"><Icon name={icon} /></span><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="challenge-bar reveal"><div><span className="eyebrow">EL RETO</span><h3>¿Cómo crear un snack nutritivo, económico y rico utilizando ingredientes accesibles?</h3></div><span className="challenge-symbol">?</span></div>
      </div>
    </section>
    <section id="solucion" className="section solution-section">
      <div className="container">
        <SectionHeading eyebrow="02 · LA RESPUESTA" title="Una alternativa que une sabor, idea y propósito">NUTRIVELT plantea una opción pensada inicialmente para estudiantes, con posibilidad de llegar a otros consumidores.</SectionHeading>
        <div className="solution-grid">{solution.map(([icon, title, text], index) => <article className={`solution-card reveal delay-${index % 3}`} key={title}><span className="solution-icon"><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p><span className="line-link">Ver propuesta <Icon name="arrow" size={15} /></span></article>)}</div>
      </div>
    </section>
  </>
}

export function ProductAndIngredients() {
  const [activeIngredient, setActiveIngredient] = useState(null)
  return <>
    <section id="producto" className="section product-section">
      <div className="container product-layout">
        <div className="product-information reveal">
          <span className="eyebrow">03 · NUESTRO PRODUCTO</span>
          <div className="product-title-row"><h2>NUTRI<span>VELT</span></h2><span className="product-badge">HORNEADA</span></div>
          <h3>Galleta proteica artesanal</h3>
          <p className="product-lead">Una galleta circular, de color cremoso y textura suave/esponjosa, elaborada mediante horneado.</p>
          <div className="product-details"><span><Icon name="check" /> Forma circular</span><span><Icon name="check" /> Textura suave/esponjosa</span><span><Icon name="check" /> Color cremoso</span><span><Icon name="check" /> Toppings opcionales</span></div>
          <div className="toppings"><small>TOPPINGS OPCIONALES</small><div><span>Maní</span><span>Almendras</span><span>Pasas</span><span>Maní confitado</span></div></div>
          <a className="button button-dark" href="#contacto">Quiero pedir <Icon name="cart" size={17} /></a>
        </div>
        <div className="product-gallery reveal delay-1">{media.products.map((item, index) => <div className={`product-photo photo-${index + 1}`} key={item.label}><MediaPlaceholder item={item} compact /></div>)}</div>
      </div>
    </section>
    <section id="ingredientes" className="section ingredients-section">
      <div className="container">
        <SectionHeading eyebrow="04 · LA RECETA" title="¿Qué hay dentro de NUTRIVELT?">Explora cada ingrediente. Las fichas muestran su función en la receta y dejan visible cualquier dato que deba completarse desde la documentación del proyecto.</SectionHeading>
        <div className="ingredient-grid">{ingredients.map((ingredient, index) => <button className={`ingredient-card reveal delay-${index % 3}`} key={ingredient.name} onClick={() => setActiveIngredient(ingredient)}><span className="ingredient-number">{String(index + 1).padStart(2, '0')}</span><span className="ingredient-icon"><Icon name={ingredient.icon} size={27} /></span><h3>{ingredient.name}</h3><p>{ingredient.role}</p><span className="ingredient-more">Ver detalle <Icon name="plus" size={15} /></span></button>)}</div>
      </div>
    </section>
    <section className="section benefits-section">
      <div className="container benefits-layout">
        <div className="benefit-feature reveal"><span className="eyebrow">05 · PROPUESTA NUTRITIVA</span><h2>¿Por qué elegir NUTRIVELT?</h2><p>El proyecto relaciona su receta con una alternativa frente a snacks poco nutritivos, usando ingredientes como camote, zapallo y garbanzo.</p><div className="benefit-note"><Icon name="heart" /><p>La propuesta no se presenta como medicamento ni sustituye una alimentación equilibrada.</p></div></div>
        <div className="benefit-list">{[['Aporte de proteínas', 'grain'], ['Fibra', 'leaf'], ['Ingredientes naturales', 'sparkle'], ['Elaboración artesanal', 'oven'], ['Precio accesible', 'coin'], ['Alternativa para el día a día', 'heart']].map(([text, icon], index) => <div className={`benefit-pill reveal delay-${index % 3}`} key={text}><span><Icon name={icon} size={18} /></span>{text}</div>)}</div>
      </div>
    </section>
    <IngredientModal ingredient={activeIngredient} onClose={() => setActiveIngredient(null)} />
  </>
}
