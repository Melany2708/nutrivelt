import { useEffect, useState } from 'react'
import Icon from './Icon'
import { LogoSlot, MediaPlaceholder } from './MediaPlaceholder'
import SectionHeading from './SectionHeading'
import { faqs, galleryItems, interviewQuestions, project, videos } from '../config'

const evidence = [
  ['Evidencias de entrevistas', 'ENTREVISTAS', 'quote'], ['Bocetos', 'BOCETOS', 'image'], ['Crazy Eights', 'CRAZY EIGHTS', 'sparkle'], ['Prototipos', 'PROTOTIPOS', 'target'], ['Fotografías de fabricación', 'FABRICACIÓN', 'oven'], ['Validación', 'VALIDACIÓN', 'check'], ['Publicidad', 'PUBLICIDAD', 'play'], ['Ventas', 'VENTAS', 'cart'], ['Mejoras del producto', 'MEJORAS', 'arrow'], ['Evidencias del equipo', 'EQUIPO', 'people'],
]

function GalleryModal({ items, item, onClose, onMove }) {
  useEffect(() => {
    if (!item) return undefined
    const handler = (event) => { if (event.key === 'Escape') onClose(); if (event.key === 'ArrowLeft') onMove(-1); if (event.key === 'ArrowRight') onMove(1) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [item, onClose, onMove])
  if (!item) return null
  const position = items.findIndex((entry) => entry.id === item.id)
  return <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title"><button className="modal-backdrop" onClick={onClose} aria-label="Cerrar imagen ampliada" /><div className="gallery-modal"><button className="icon-button close-modal" onClick={onClose} aria-label="Cerrar"><Icon name="close" /></button><MediaPlaceholder item={item} icon="image" /><div className="gallery-modal-caption"><span>{item.category}</span><h3 id="gallery-modal-title">{item.label}</h3><small>{position + 1} de {items.length}</small></div><button className="gallery-nav previous" onClick={() => onMove(-1)} aria-label="Imagen anterior"><Icon name="arrow" /></button><button className="gallery-nav next" onClick={() => onMove(1)} aria-label="Imagen siguiente"><Icon name="arrow" /></button></div></div>
}

function VideoCard({ video }) {
  const renderVideo = () => {
    if (!video.url) return <MediaPlaceholder item={{ label: video.label }} icon="play" />
    if (/\.(mp4|webm|ogg)$/i.test(video.url)) return <video controls preload="metadata"><source src={video.url} />Tu navegador no permite reproducir este video.</video>
    const embed = video.url.includes('youtu.be/') ? video.url.replace('youtu.be/', 'www.youtube.com/embed/') : video.url.replace('watch?v=', 'embed/')
    return <iframe src={embed} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  }
  return <article className="video-card reveal"><div className="video-frame">{renderVideo()}</div><div><span className="eyebrow">VIDEO</span><h3>{video.title}</h3><p>{video.description}</p></div></article>
}

export default function MediaAndClosing() {
  const categories = ['Todo', ...new Set(galleryItems.map((item) => item.category))]
  const [filter, setFilter] = useState('Todo')
  const [activeItem, setActiveItem] = useState(null)
  const shownItems = filter === 'Todo' ? galleryItems : galleryItems.filter((item) => item.category === filter)
  const switchItem = (direction) => {
    const currentIndex = galleryItems.findIndex((entry) => entry.id === activeItem.id)
    setActiveItem(galleryItems[(currentIndex + direction + galleryItems.length) % galleryItems.length])
  }
  return <>
    <section id="validacion" className="section validation-section">
      <div className="container"><SectionHeading eyebrow="16 · VALIDACIÓN" title="¿Qué opinan nuestros usuarios?">El proyecto realizó instrumentos de validación y encuestas. Los resultados se mantienen pendientes hasta incorporar los datos reales.</SectionHeading><div className="validation-layout"><article className="survey-card reveal"><div className="survey-question-icon"><Icon name="quote" size={27} /></div><span className="eyebrow">ENCUESTA DE ACEPTACIÓN DE PRECIO</span><h3>¿Está de acuerdo con el precio de 1 x S/ 3.00 y 2 x S/ 5.00?</h3><p>Instrumento aplicado a 10 personas según el documento del proyecto.</p><div className="survey-pending"><Icon name="image" /><span>GRÁFICO DE RESULTADOS</span><small>Agregar únicamente resultados reales.</small></div></article><aside className="result-space reveal delay-1"><span className="eyebrow">RESULTADOS DE ENCUESTA</span><h3>Espacio listo para actualizar</h3><p>Cuando se incorporen datos reales, este bloque puede incluir sus valores y gráfico sin modificar el diseño de la página.</p><code>src/config.js → encuesta</code></aside></div></div>
    </section>
    <section className="section interview-section">
      <div className="container"><SectionHeading eyebrow="17 · ENTREVISTAS" title="Escuchamos a nuestros usuarios">Estas preguntas orientaron la etapa de empatía y ayudan a comprender los hábitos y preferencias de consumo.</SectionHeading><div className="interview-layout"><div className="interview-video reveal"><MediaPlaceholder item={{ label: 'VIDEO DE ENTREVISTA' }} icon="play" /><div><Icon name="play" size={17} /><span>Compatible con MP4, YouTube o Vimeo</span></div></div><div className="questions-list reveal delay-1">{interviewQuestions.map((question, index) => <details key={question}><summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<Icon name="plus" size={17} /></summary><p>Pregunta de entrevista usada durante la exploración del proyecto.</p></details>)}</div></div></div>
    </section>
    <section id="galeria" className="section gallery-section">
      <div className="container"><SectionHeading eyebrow="18 · GALERÍA MULTIMEDIA" title="El proyecto, en imágenes">Filtra las categorías y abre cada espacio para visualizarlo en grande. Todos están preparados para fotografías reales del proyecto.</SectionHeading><div className="gallery-filter" role="group" aria-label="Filtrar galería">{categories.map((category) => <button className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div><div className="gallery-grid">{shownItems.map((item, index) => <button className={`gallery-item reveal delay-${index % 3}`} onClick={() => setActiveItem(item)} key={item.id}><MediaPlaceholder item={item} compact /><span className="gallery-category">{item.category}</span><span className="gallery-expand"><Icon name="plus" size={18} /></span></button>)}</div></div>
    </section>
    <section className="section videos-section">
      <div className="container"><SectionHeading eyebrow="19 · VIDEOS" title="Nuestro proyecto en acción">Agrega un MP4, un enlace de YouTube o Vimeo desde la configuración para activar cada reproductor.</SectionHeading><div className="videos-grid">{videos.map((video) => <VideoCard key={video.title} video={video} />)}</div></div>
    </section>
    <section className="section evidence-section">
      <div className="container"><SectionHeading eyebrow="20 · EVIDENCIAS" title="Detrás de NUTRIVELT">Un espacio organizado para documentar el recorrido del proyecto con imágenes, videos o enlaces reales.</SectionHeading><div className="evidence-grid">{evidence.map(([title, label, icon], index) => <article className={`evidence-card reveal delay-${index % 3}`} key={title}><span className="evidence-number">{String(index + 1).padStart(2, '0')}</span><Icon name={icon} size={25} /><h3>{title}</h3><div><Icon name="plus" size={14} /> {label}</div></article>)}</div></div>
    </section>
    <section className="section growth-section">
      <div className="container"><SectionHeading eyebrow="21 · CRECIMIENTO" title="¿Hacia dónde puede crecer NUTRIVELT?">Una mirada abierta a los siguientes pasos, basada en nuevos canales de venta, diversificación, ampliación de ingresos y mejoras del producto.</SectionHeading><div className="growth-grid"><article className="reveal"><Icon name="arrow" /><h3>Nuevos canales de venta</h3><p>Espacio para registrar canales que se validen en el futuro.</p></article><article className="reveal delay-1"><Icon name="sparkle" /><h3>Diversificación</h3><p>Espacio editable para futuras líneas, sin anticipar productos concretos.</p></article><article className="reveal delay-2"><Icon name="coin" /><h3>Ampliación de ingresos</h3><p>Oportunidades a documentar cuando cuenten con evidencia.</p></article><article className="reveal"><Icon name="target" /><h3>Mejoras del producto</h3><p>Ajustes construidos a partir de futuras validaciones.</p></article></div></div>
    </section>
    <section className="section learning-section">
      <div className="container"><SectionHeading light eyebrow="22 · APRENDIZAJES" title="Lo que aprendimos">El recorrido convirtió cada prueba en una oportunidad para afinar la propuesta.</SectionHeading><div className="learning-grid">{['Los primeros prototipos pueden fallar.', 'El error puede convertirse en aprendizaje.', 'El producto debe responder a una necesidad real.', 'El precio debe ser accesible para el público objetivo.', 'La validación permite conocer la opinión de los usuarios.', 'El Design Thinking ayudó a estructurar el proyecto.', 'El pivotaje permitió llegar a una solución mejor.'].map((text, index) => <article className={`reveal delay-${index % 3}`} key={text}><span>{String(index + 1).padStart(2, '0')}</span><p>{text}</p></article>)}</div></div>
    </section>
    <section className="section conclusion-section"><div className="container conclusion-layout reveal"><div className="conclusion-symbol">N</div><div><span className="eyebrow">23 · CONCLUSIÓN</span><h2>Más que una galleta, una idea que evolucionó.</h2><p>NUTRIVELT surgió mediante prueba, error, innovación y adaptación.</p><blockquote>“De una idea inicial, a una solución desarrollada mediante creatividad, experimentación y validación.”</blockquote><a className="button" href="#contacto">Realizar un pedido <Icon name="arrow" size={17} /></a></div></div></section>
    <section className="section sources-section"><div className="container"><details className="sources-details"><summary><span><span className="eyebrow">REFERENCIAS</span><h2>Fuentes y referencias</h2></span><Icon name="down" /></summary><ul><li>Instituto Nacional de Salud (INS) / CENAN. <em>Tabla de Composición de Alimentos Peruana.</em></li><li>Osterwalder, A. &amp; Pigneur, Y. <em>Generación de modelos de negocio.</em></li><li>Organización Mundial de la Salud (OMS).</li><li>Tim Brown. <em>Design Thinking.</em></li></ul></details></div></section>
    <section className="section faq-section"><div className="container faq-layout"><SectionHeading eyebrow="24 · FAQ" title="Preguntas frecuentes">Respuestas basadas en la información actualmente disponible del proyecto.</SectionHeading><div className="faq-list">{faqs.map(([question, answer], index) => <details className="reveal" key={question}><summary><span>{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong><Icon name="plus" size={18} /></summary><p>{answer}</p></details>)}</div></div></section>
    <GalleryModal items={galleryItems} item={activeItem} onClose={() => setActiveItem(null)} onMove={switchItem} />
  </>
}

export function Footer() {
  const links = [['Inicio', 'inicio'], ['Producto', 'producto'], ['Proceso', 'proceso'], ['Modelo de negocio', 'modelo-negocio'], ['Galería', 'galeria'], ['Contacto', 'contacto']]
  return <footer className="site-footer"><div className="container footer-layout"><div className="footer-branding"><a href="#inicio"><span>NUTRI</span>VELT</a><p>Proyecto escolar de emprendimiento</p><div className="footer-logos"><LogoSlot item={project.logos.cluster} label="CLÚSTER ÉLAN" /><LogoSlot item={project.logos.institution} label="I.E. ROOSEVELT" /></div></div><nav aria-label="Enlaces del pie de página"><strong>Explora el proyecto</strong>{links.map(([title, id]) => <a href={`#${id}`} key={id}>{title}</a>)}</nav><div className="footer-contact"><strong>Contacto</strong><p>WhatsApp, Instagram, Facebook y TikTok quedan listos para configurar desde <code>src/config.js</code>.</p><div className="footer-socials"><span><Icon name="phone" /></span><span><Icon name="instagram" /></span><span><b>f</b></span><span><b>t</b></span></div></div></div><div className="container footer-bottom"><span>© {project.year} NUTRIVELT · {project.team}</span><span>{project.institution}</span></div></footer>
}
