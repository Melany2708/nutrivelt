import { useState } from 'react'
import Icon from './Icon'
import { MediaPlaceholder } from './MediaPlaceholder'
import SectionHeading from './SectionHeading'
import { designPhases, media } from '../config'

const evolution = [
  { stage: 'ETAPA 1', title: 'Picarones de camote y zapallo', detail: 'La preparación no obtuvo la textura esperada.', icon: 'pumpkin' },
  { stage: 'ETAPA 2', title: 'Churros de garbanzo', detail: 'Nuevamente surgieron problemas de consistencia.', icon: 'grain' },
  { stage: 'ETAPA 3', title: 'Consolidación de la receta', detail: 'Se rescataron elementos de los intentos anteriores y se cambió la técnica hacia el horneado.', icon: 'oven' },
]
const process = [
  ['01', 'Preparación vegetal', 'Se prepara la base vegetal considerada en la receta.', 'FOTO DE PREPARACIÓN VEGETAL'],
  ['02', 'Hervor aromático', 'Se integra el hervor aromático dentro del proceso.', 'FOTO DEL HERVOR AROMÁTICO'],
  ['03', 'Elaboración del puré', 'La preparación continúa con la elaboración del puré.', 'FOTO DEL PURÉ'],
  ['04', 'Mezclado de la masa', 'Se combinan los ingredientes para formar la masa.', 'FOTO DEL MEZCLADO'],
  ['05', 'Incorporación de toppings', 'Se pueden añadir toppings opcionales a la preparación.', 'FOTO DE TOPPINGS'],
  ['06', 'Horneado', 'La receta se consolida con la técnica de horneado.', 'FOTO DEL HORNEADO'],
]

export function EvolutionAndProcess() {
  const [openStep, setOpenStep] = useState(0)
  return <>
    <section id="innovacion" className="section evolution-section">
      <div className="container">
        <SectionHeading eyebrow="06 · INNOVACIÓN" title="De la idea al producto">NUTRIVELT se construyó mediante prueba, ajuste y adaptación.</SectionHeading>
        <div className="evolution-track">{evolution.map((item, index) => <article className={`evolution-card reveal delay-${index}`} key={item.stage}><div className="evolution-dot"><Icon name={item.icon} size={19} /></div><span>{item.stage}</span><h3>{item.title}</h3><p>{item.detail}</p>{index < evolution.length - 1 && <i className="evolution-arrow"><Icon name="arrow" /></i>}</article>)}<div className="nutrivelt-result reveal"><span>RESULTADO</span><strong>NUTRI<span>VELT</span></strong><small>Galleta artesanal horneada</small></div></div>
      </div>
    </section>
    <section id="proceso" className="section process-section">
      <div className="container">
        <SectionHeading eyebrow="07 · ELABORACIÓN" title="Nuestro proceso">Selecciona una etapa para recorrer la receta técnica. Cada espacio fotográfico está listo para recibir evidencia real.</SectionHeading>
        <div className="process-layout"><div className="process-steps">{process.map(([number, title, detail], index) => <button className={`process-step ${openStep === index ? 'active' : ''}`} onClick={() => setOpenStep(index)} key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><Icon name="arrow" size={18} /></button>)}</div><div className="process-stage reveal"><div className="stage-number">{process[openStep][0]}</div><MediaPlaceholder item={{ label: process[openStep][3] }} icon="image" /><div><span className="eyebrow">PASO {process[openStep][0]}</span><h3>{process[openStep][1]}</h3><p>{process[openStep][2]}</p></div></div></div>
      </div>
    </section>
  </>
}

export function DesignAndPivot() {
  const [selected, setSelected] = useState(0)
  return <>
    <section id="design-thinking" className="section design-section">
      <div className="container">
        <SectionHeading light eyebrow="08 · METODOLOGÍA" title="Así construimos nuestra solución">El Design Thinking organizó el proceso: conocer, enfocar, crear, probar y aprender.</SectionHeading>
        <div className="design-layout"><div className="phase-selector" role="tablist" aria-label="Fases de Design Thinking">{designPhases.map((phase, index) => <button key={phase.title} role="tab" aria-selected={selected === index} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)}><span>{phase.number}</span><strong>{phase.title}</strong><small>{phase.short}</small></button>)}</div><article className="phase-detail reveal"><div className="phase-index">{designPhases[selected].number}</div><span className="eyebrow">DESIGN THINKING</span><h3>{designPhases[selected].title}</h3><p>{designPhases[selected].detail}</p><div className="phase-progress"><span style={{ width: `${(selected + 1) * 20}%` }} /></div><small>Fase {selected + 1} de 5</small></article></div>
      </div>
    </section>
    <section className="section crazy-section">
      <div className="container crazy-layout">
        <div className="crazy-copy reveal"><span className="eyebrow">09 · OCHO LOCOS</span><h2><em>8 ideas.</em><br />8 minutos.<br />Una nueva solución.</h2><p>La técnica Crazy Eights ayudó a generar diferentes ideas después de que los churros no funcionaran.</p><div className="crazy-caption"><Icon name="sparkle" /><span>Cada cuadro abre una posibilidad.</span></div></div>
        <div className="crazy-visual reveal delay-1"><div className="eight-sheet" aria-label="Representación de una hoja con ocho ideas">{Array.from({ length: 8 }, (_, index) => <span key={index}>{String(index + 1).padStart(2, '0')}</span>)}</div><div className="crazy-media">{media.crazyEights.map((item) => <MediaPlaceholder item={item} compact key={item.label} />)}</div></div>
      </div>
    </section>
    <section className="section pivot-section">
      <div className="container">
        <div className="pivot-head reveal"><span className="eyebrow">10 · PIVOTAJE</span><h2>Cambiar de ruta también es avanzar.</h2><p>La capacidad de cambiar de estrategia cuando una solución no funciona, aprovechando lo aprendido y los recursos disponibles.</p></div>
        <div className="pivot-flow reveal"><div><span className="pivot-badge">01</span><Icon name="pumpkin" /><h3>Picarones</h3></div><i><Icon name="arrow" /></i><div><span className="pivot-badge">02</span><Icon name="grain" /><h3>Churros</h3></div><i><Icon name="arrow" /></i><div className="pivot-final"><span className="pivot-badge">03</span><Icon name="oven" /><h3>Galletas<br />NUTRIVELT</h3></div></div>
      </div>
    </section>
  </>
}
