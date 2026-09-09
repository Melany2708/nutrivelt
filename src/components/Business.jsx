import { useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { businessCanvas, WHATSAPP_NUMBER } from '../config'

const audiences = [
  ['Estudiantes', 'Buscan productos ricos, prácticos y accesibles.', 'people'],
  ['Deportistas escolares', 'Buscan alternativas para recuperar energía antes o después del entrenamiento.', 'target'],
  ['Docentes y personal', 'Buscan snacks para consumir durante la jornada.', 'heart'],
]

function PriceCard({ title, price, details, highlighted, onClick, children }) {
  return <article className={`price-card ${highlighted ? 'featured' : ''}`}>
    {highlighted && <span className="popular-tag">MÁS CONVENIENTE</span>}<span className="eyebrow">{title}</span><strong>{price}</strong><p>{details}</p>{children}<button className={`button ${highlighted ? '' : 'button-outline'}`} onClick={onClick}>Comprar <Icon name="arrow" size={16} /></button>
  </article>
}

export default function Business() {
  const [canvasItem, setCanvasItem] = useState(businessCanvas[3])
  const [choice, setChoice] = useState(1)
  const price = choice === 1 ? 3 : 5
  const createMessage = () => `Hola, quiero realizar un pedido de NUTRIVELT.%0A%0ACantidad: ${choice} ${choice === 1 ? 'envase' : 'envases'}%0ATotal: S/ ${price.toFixed(2)}`
  const isWhatsappConfigured = WHATSAPP_NUMBER && WHATSAPP_NUMBER !== 'COLOCAR_NUMERO_AQUI'
  const sendOrder = () => {
    if (!isWhatsappConfigured) { window.alert('Aún falta configurar el número de WhatsApp en src/config.js.') ; return }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${createMessage()}`, '_blank', 'noopener,noreferrer')
  }
  const selectPlan = (value) => { setChoice(value); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }
  return <>
    <section id="modelo-negocio" className="section canvas-section">
      <div className="container">
        <SectionHeading eyebrow="11 · MODELO DE NEGOCIO" title="Un Canvas que conecta cada decisión">Pasa el cursor o selecciona un bloque para explorar cómo se articula la propuesta de NUTRIVELT.</SectionHeading>
        <div className="canvas-layout"><div className="business-canvas">{businessCanvas.map((item, index) => <button key={item.id} className={`canvas-cell cell-${item.id} ${canvasItem.id === item.id ? 'active' : ''}`} onMouseEnter={() => setCanvasItem(item)} onFocus={() => setCanvasItem(item)} onClick={() => setCanvasItem(item)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><Icon name="arrow" size={14} /></button>)}</div><aside className="canvas-detail reveal"><span className="eyebrow">BLOQUE SELECCIONADO</span><h3>{canvasItem.title}</h3><p>{canvasItem.text}</p><span className="canvas-hint"><Icon name="sparkle" size={15} /> Selecciona otro bloque para explorar.</span></aside></div>
      </div>
    </section>
    <section className="section audience-section">
      <div className="container"><SectionHeading eyebrow="12 · PÚBLICO OBJETIVO" title="Pensado para diferentes momentos de la jornada">La propuesta nació enfocada en el entorno escolar.</SectionHeading><div className="audience-grid">{audiences.map(([title, text, icon], index) => <article className={`audience-card reveal delay-${index}`} key={title}><div className="audience-icon"><Icon name={icon} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
    </section>
    <section className="section competition-section">
      <div className="container"><SectionHeading eyebrow="13 · MERCADO" title="Una alternativa entre opciones diferentes">La comparación se centra en tipo de producto, rango de precio y accesibilidad; no agrega métricas que el proyecto no haya validado.</SectionHeading><div className="competition-comparison reveal"><div className="competition-head"><span>Alternativa</span><span>Precio</span><span>Valor nutritivo</span><span>Accesibilidad</span><span>Tipo de producto</span></div><article><strong>Competencia indirecta</strong><span>S/ 1.00 – S/ 2.00</span><span>Snacks procesados</span><span>Opciones de consumo frecuente</span><span>Galletas industriales y snacks procesados</span></article><article><strong>Competencia directa</strong><span>S/ 6.00 – S/ 8.00</span><span>Barras y galletas proteicas</span><span>Tiendas fitness</span><span>Barras proteicas y galletas de tiendas fitness</span></article><article className="nutrivelt-row"><strong>NUTRIVELT</strong><span>S/ 3.00<br /><small>2 por S/ 5.00</small></span><span>Propuesta con ingredientes como camote, zapallo y garbanzo</span><span>Precio accesible</span><span>Galleta proteica artesanal horneada</span></article></div></div>
    </section>
    <section className="section pricing-section">
      <div className="container"><SectionHeading align="centered" eyebrow="14 · PRECIOS" title="Elige cómo disfrutar NUTRIVELT">Una propuesta comercial sencilla, pensada para ser accesible.</SectionHeading><div className="pricing-grid"><PriceCard title="PLAN INDIVIDUAL" price="S/ 3.00" details="1 envase de NUTRIVELT" onClick={() => selectPlan(1)}><div className="price-check"><Icon name="check" size={16} /> Presentación individual</div></PriceCard><PriceCard title="PROMOCIÓN" price="S/ 5.00" details="2 envases · Ideal para compartir" highlighted onClick={() => selectPlan(2)}><div className="price-check"><Icon name="check" size={16} /> 2 envases</div></PriceCard></div></div>
    </section>
    <section id="contacto" className="section order-section">
      <div className="container order-layout"><div className="order-copy reveal"><span className="eyebrow">15 · PEDIDOS</span><h2>¿Listo para probar NUTRIVELT?</h2><p>Selecciona una opción. El pedido se prepara para WhatsApp cuando el número del equipo sea configurado.</p><div className="whatsapp-status"><Icon name="phone" size={18} /><span>{isWhatsappConfigured ? 'WhatsApp configurado' : 'WhatsApp pendiente de configurar'}</span></div></div><div className="order-card reveal delay-1"><fieldset><legend>Selecciona tu pedido</legend><label className={choice === 1 ? 'selected' : ''}><input type="radio" name="order" value="1" checked={choice === 1} onChange={() => setChoice(1)} /><span><strong>1 envase</strong><small>S/ 3.00</small></span><Icon name="check" size={17} /></label><label className={choice === 2 ? 'selected' : ''}><input type="radio" name="order" value="2" checked={choice === 2} onChange={() => setChoice(2)} /><span><strong>2 envases</strong><small>S/ 5.00 · Promoción</small></span><Icon name="check" size={17} /></label></fieldset><div className="order-total"><span>Total</span><strong>S/ {price.toFixed(2)}</strong></div><button className="button order-button" onClick={sendOrder}>Realizar pedido por WhatsApp <Icon name="phone" size={18} /></button><small className="order-message">Mensaje: “Hola, quiero realizar un pedido de NUTRIVELT.”</small></div></div>
    </section>
  </>
}
