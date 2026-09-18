/*
 * NUTRIVELT — centro de contenido editable
 * ---------------------------------------------------------------
 * Cambia aquí nombres, precios, enlaces, imágenes, videos y textos.
 * Deja `src` o `url` vacío para conservar el placeholder elegante.
 */
window.NUTRIVELT_CONFIG = {
  project: {
    name: 'NUTRIVELT',
    tagline: 'Snack nutritivo, accesible y pensado para todos',
    description: 'Una alternativa nutritiva, accesible y agradable.',
    year: '2026',
    team: 'Clúster Élan',
    institution: 'Colegio Privado Preuniversitario "Roosevelt"',
    institutionShort: 'Roosevelt',
    student: 'Jhonatan Bringas Vasquez',
    advisor: 'Jhonatan Bringas Vasquez',
    institutionCode: '1722214',
    modularCode: 'POR COMPLETAR',
    category: 'CATEGORÍA B'
  },

  prices: {
    unit: 'S/ 3.00',
    offer: '2 envases por S/ 5.00'
  },

  // Mantén estos campos aunque aún no haya redes publicadas. El sitio los
  // usa para crear los botones y muestra "Pendiente" cuando estén vacíos.
  socialLinks: {
    whatsapp: '',
    instagram: '',
    facebook: '',
    tiktok: ''
  },


  media: {
    logos: {
      institution: { src: 'assets/images/LogoConFondoRoosevelt (1).png'},
      project: { src: 'assets/images/logonutrivelt.jpeg'}
    },
    hero: { src: 'assets/images/Foto principal del Producto_.jpg'},
    problem: { src: 'assets/images/Imagen del problema_.jpg'},
    problemEvidence: { src: 'assets/images/Imagen del problema.jpg'},
    innovation: { src: '', alt: 'Innovación de NUTRIVELT', label: 'ESPACIO PARA FOTOGRAFÍA O VIDEO' },
    empathyMap: { src: '', alt: 'Mapa de empatía del proyecto', label: 'ESPACIO PARA MAPA DE EMPATÍA' },
    cover: { src: '', alt: 'Foto representativa del proyecto', label: 'ESPACIO PARA FOTO REPRESENTATIVA' },
    advisor: { src: '', alt: 'Foto del docente asesor', label: 'ESPACIO PARA FOTO' }
  },

  solutionSteps: [
    { title: 'Ingredientes', text: 'Selección de insumos para la preparación.', media: { src: '', label: 'FOTO DE INGREDIENTES' } },
    { title: 'Preparación', text: 'Mezcla y trabajo de la receta.', media: { src: '', label: 'FOTO DE PREPARACIÓN' } },
    { title: 'Horneado', text: 'Etapa de cocción del producto.', media: { src: '', label: 'FOTO DE HORNEADO' } },
    { title: 'Producto final', text: 'Presentación lista para compartir.', media: { src: '', label: 'FOTO DEL PRODUCTO FINAL' } }
  ],

  ingredients: [
    { name: 'Camote', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE CAMOTE' } },
    { name: 'Zapallo', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE ZAPALLO' } },
    { name: 'Anís', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE ANÍS' } },
    { name: 'Harina de garbanzo', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE HARINA DE GARBANZO' } },
    { name: 'Harina común', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE HARINA COMÚN' } },
    { name: 'Huevo', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE HUEVO' } },
    { name: 'Panela', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE PANELA' } },
    { name: 'Canela', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE CANELA' } },
    { name: 'Clavo de olor', description: 'Ingrediente seleccionado para la receta.', note: 'Descripción y aporte por completar.', media: { src: '', label: 'FOTO DE CLAVO DE OLOR' } }
  ],

  competition: [
    { product: 'Alternativas convencionales', features: 'Información pendiente de completar.', strengths: 'Información pendiente de completar.', limits: 'Información pendiente de completar.' },
    { product: 'NUTRIVELT', features: 'Snack elaborado con ingredientes seleccionados y envase biodegradable.', strengths: 'Propuesta accesible y presentación pensada para el consumo práctico.', limits: 'Información pendiente de completar.' }
  ],

  designThinking: [
    { id: 'empathize', number: '01', title: 'Empatizar', summary: 'Exploración del problema y escucha de usuarios.', result: 'Información pendiente de completar.', media: { src: '', label: 'EVIDENCIA DE EMPATIZAR' } },
    { id: 'define', number: '02', title: 'Definir', summary: 'Síntesis de hallazgos para delimitar el reto.', result: 'Información pendiente de completar.', media: { src: '', label: 'EVIDENCIA DE DEFINIR' } },
    { id: 'ideate', number: '03', title: 'Idear', summary: 'Generación y discusión de alternativas.', result: 'Información pendiente de completar.', media: { src: '', label: 'EVIDENCIA DE IDEAR' } },
    { id: 'prototype', number: '04', title: 'Prototipar', summary: 'Construcción y mejora progresiva del producto.', result: 'Información pendiente de completar.', media: { src: '', label: 'EVIDENCIA DE PROTOTIPAR' } },
    { id: 'evaluate', number: '05', title: 'Evaluar', summary: 'Pruebas con usuarios y registro de aprendizajes.', result: 'Información pendiente de completar.', media: { src: '', label: 'EVIDENCIA DE EVALUAR' } }
  ],

  interview: {
    video: { url: '', title: 'Entrevista del proyecto', description: 'Espacio para registrar la entrevista.', date: 'Fecha pendiente de completar' },
    questions: Array.from({ length: 13 }, (_, index) => ({
      question: `Pregunta ${String(index + 1).padStart(2, '0')} — por completar`,
      answer: 'Espacio para agregar respuesta o hallazgo de la entrevista.'
    }))
  },

  ideationGallery: Array.from({ length: 4 }, (_, index) => ({
    title: `Evidencia de ideación ${String(index + 1).padStart(2, '0')}`,
    date: 'Fecha pendiente de completar',
    media: { src: '', label: 'ESPACIO PARA FOTO' }
  })),

  prototypeJourney: [
    { name: 'Prototipo I', subtitle: 'Picarones', date: 'Fecha pendiente de completar', description: 'Descripción pendiente de completar.', result: 'Resultado pendiente de completar.', learning: 'Aprendizaje pendiente de completar.', media: { src: '', label: 'FOTO O VIDEO: PROTOTIPO I' } },
    { name: 'Pivote', subtitle: 'Cambio de enfoque', date: 'Fecha pendiente de completar', description: 'Descripción pendiente de completar.', result: 'Resultado pendiente de completar.', learning: 'Aprendizaje pendiente de completar.', media: { src: '', label: 'FOTO O VIDEO: PIVOTE' } },
    { name: 'Prototipo II', subtitle: 'Churros', date: 'Fecha pendiente de completar', description: 'Descripción pendiente de completar.', result: 'Resultado pendiente de completar.', learning: 'Aprendizaje pendiente de completar.', media: { src: '', label: 'FOTO O VIDEO: PROTOTIPO II' } },
    { name: 'Evolución', subtitle: 'Ocho Locos', date: 'Fecha pendiente de completar', description: 'Descripción pendiente de completar.', result: 'Resultado pendiente de completar.', learning: 'Aprendizaje pendiente de completar.', media: { src: '', label: 'FOTO O VIDEO: OCHO LOCOS' } },
    { name: 'Estandarización', subtitle: 'NUTRIVELT', date: 'Fecha pendiente de completar', description: 'Descripción pendiente de completar.', result: 'Resultado pendiente de completar.', learning: 'Aprendizaje pendiente de completar.', media: { src: '', label: 'FOTO O VIDEO: NUTRIVELT' } }
  ],

  survey: {
    targetResponses: 10,
    completedResponses: null,
    note: 'Los resultados de la encuesta están pendientes de registrar.',
    results: [] // Ejemplo: [{ label: 'Sabor', value: 8, color: '#e7a44c' }]
  },

  validationPlan: [
    { phase: 'Validación inicial', hypothesis: 'Información pendiente de completar.', actions: 'Información pendiente de completar.', indicators: 'Información pendiente de completar.', time: 'Información pendiente de completar.' },
    { phase: 'Prueba de producto', hypothesis: 'Información pendiente de completar.', actions: 'Información pendiente de completar.', indicators: 'Información pendiente de completar.', time: 'Información pendiente de completar.' },
    { phase: 'Ajuste y venta', hypothesis: 'Información pendiente de completar.', actions: 'Información pendiente de completar.', indicators: 'Información pendiente de completar.', time: 'Información pendiente de completar.' }
  ],

  gantt: {
    weeks: 14,
    tasks: [
      { name: 'Situación problemática', start: 1, duration: 1 }, { name: 'Diagnóstico de oferta', start: 1, duration: 2 },
      { name: 'Pregunta reto', start: 2, duration: 1 }, { name: 'Clientes', start: 2, duration: 2 },
      { name: 'Segmentación', start: 3, duration: 1 }, { name: 'Competidores', start: 3, duration: 2 },
      { name: 'Propuesta de valor', start: 4, duration: 2 }, { name: 'Canales', start: 5, duration: 1 },
      { name: 'Solución', start: 5, duration: 2 }, { name: 'Prototipo I', start: 6, duration: 1 },
      { name: 'Prototipo II', start: 7, duration: 1 }, { name: 'Estandarización', start: 8, duration: 1 },
      { name: 'Pruebas', start: 9, duration: 1 }, { name: 'Viabilidad', start: 9, duration: 2 },
      { name: 'Modelo Canvas', start: 10, duration: 1 }, { name: 'Costos y precio', start: 10, duration: 2 },
      { name: 'Validación', start: 11, duration: 1 }, { name: 'Venta comercial', start: 12, duration: 2 },
      { name: 'Informe final', start: 13, duration: 2 }
    ]
  },

  leanCanvas: [
    { title: '1. Problema', text: 'Consumo de snacks de bajo aporte nutricional entre estudiantes.' },
    { title: '2. Segmento de clientes', text: 'Información pendiente de completar.' },
    { title: '3. Propuesta única de valor', text: 'Snack nutritivo, accesible y pensado para todos.' },
    { title: '4. Solución', text: 'Alternativa elaborada con ingredientes seleccionados.' },
    { title: '5. Canales', text: 'Venta directa, WhatsApp, cafetines, tiendas y redes sociales.' },
    { title: '6. Métricas clave', text: 'Información pendiente de completar.' },
    { title: '7. Ventaja injusta', text: 'Información pendiente de completar.' },
    { title: '8. Flujo de ingresos', text: 'Venta individual y promoción por dos envases.' },
    { title: '9. Estructura de costos', text: 'Información pendiente de completar.' }
  ],

  acquisition: [
    { title: 'Video publicitario', description: 'Espacio para agregar una pieza audiovisual.', link: '', media: { src: '', label: 'ESPACIO PARA VIDEO' } },
    { title: 'Afiches', description: 'Espacio para agregar afiches de campaña.', link: '', media: { src: '', label: 'ESPACIO PARA AFICHE' } },
    { title: 'Redes sociales', description: 'Espacio para agregar contenido de redes.', link: '', media: { src: '', label: 'ESPACIO PARA CONTENIDO' } },
    { title: 'Venta directa', description: 'Espacio para agregar evidencia de venta.', link: '', media: { src: '', label: 'ESPACIO PARA EVIDENCIA' } },
    { title: 'Promociones', description: 'Espacio para agregar material promocional.', link: '', media: { src: '', label: 'ESPACIO PARA PROMOCIÓN' } }
  ],

  retention: [
    { client: 'Información pendiente de completar', action: 'Información pendiente de completar', evidence: '' }
  ],

  gallery: [
    { category: 'Problema', title: 'Evidencia del problema', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DEL PROBLEMA' } },
    { category: 'Entrevistas', title: 'Entrevista', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DE ENTREVISTA' } },
    { category: 'Ideación', title: 'Generación de ideas', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DE IDEACIÓN' } },
    { category: 'Prototipos', title: 'Prototipo', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DE PROTOTIPO' } },
    { category: 'Producción', title: 'Producción', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DE PRODUCCIÓN' } },
    { category: 'Validación', title: 'Validación', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DE VALIDACIÓN' } },
    { category: 'Ventas', title: 'Venta', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DE VENTA' } },
    { category: 'Equipo', title: 'Equipo Clúster Élan', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FOTO DEL EQUIPO' } }
  ],

  videos: [
    { title: 'Entrevista del proyecto', description: 'Espacio para registrar una entrevista.', date: 'Fecha pendiente de completar', url: '' },
    { title: 'Proceso de elaboración', description: 'Espacio para mostrar el proceso.', date: 'Fecha pendiente de completar', url: '' },
    { title: 'Validación con usuarios', description: 'Espacio para registrar las pruebas.', date: 'Fecha pendiente de completar', url: '' }
  ],

  evidence: [
    { type: 'Fotografía', description: 'Espacio para agregar evidencia.', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA EVIDENCIA FOTOGRÁFICA' }, link: '' },
    { type: 'Video', description: 'Espacio para agregar evidencia.', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA VIDEO' }, link: '' },
    { type: 'Documento', description: 'Espacio para agregar evidencia.', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA DOCUMENTO' }, link: '' },
    { type: 'Encuesta', description: 'Espacio para agregar evidencia.', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA ENCUESTA' }, link: '' },
    { type: 'Factura', description: 'Espacio para agregar evidencia.', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA FACTURA' }, link: '' },
    { type: 'Registro', description: 'Espacio para agregar evidencia.', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA REGISTRO' }, link: '' },
    { type: 'Constancia', description: 'Espacio para agregar evidencia.', date: 'Fecha pendiente', media: { src: '', label: 'ESPACIO PARA CONSTANCIA' }, link: '' }
  ],

  annexes: [
    { title: 'Facturas de compras', link: '' }, { title: 'Registros de ventas', link: '' },
    { title: 'Constancias de participación', link: '' }, { title: 'Documentos adicionales', link: '' }
  ],

  team: [
    { name: 'Jhonatan Bringas Vasquez', role: 'Información pendiente de completar', description: 'Integrante del equipo Clúster Élan.', media: { src: '', label: 'ESPACIO PARA FOTO' } }
  ]
};
