/*
 * Centro de contenido editable de NUTRIVELT.
 * Para añadir una foto o logo, copie el archivo en public/assets/<categoria>/
 * y reemplace el valor src vacío por, por ejemplo: '/assets/producto/foto-01.jpg'.
 * Los src vacíos muestran un placeholder intencional y nunca generan una imagen falsa.
 */
export const WHATSAPP_NUMBER = 'COLOCAR_NUMERO_AQUI'

export const project = {
  name: 'NUTRIVELT',
  team: 'Clúster Élan',
  institution: 'I.E. Roosevelt',
  student: 'Jhonatan Bringas Vasquez',
  year: '2026',
  tagline: 'Una nueva forma de disfrutar lo nutritivo',
  description: 'Una galleta artesanal horneada elaborada principalmente con camote, zapallo y harina de garbanzo.',
  logos: {
    nutrivelt: { src: '', label: 'LOGO NUTRIVELT', alt: 'Logo de NUTRIVELT' },
    cluster: { src: '', label: 'LOGO CLÚSTER ÉLAN', alt: 'Logo de Clúster Élan' },
    institution: { src: '', label: 'LOGO I.E. ROOSEVELT', alt: 'Logo de la I.E. Roosevelt' },
  },
  social: { instagram: '', facebook: '', tiktok: '' },
}

export const media = {
  hero: { src: '', label: 'IMAGEN PRINCIPAL DEL PRODUCTO', alt: 'Fotografía principal pendiente de NUTRIVELT' },
  products: [
    { src: '', label: 'FOTO PRODUCTO 1', alt: 'Foto del producto 1' },
    { src: '', label: 'FOTO PRODUCTO 2', alt: 'Foto del producto 2' },
    { src: '', label: 'FOTO PRODUCTO 3', alt: 'Foto del producto 3' },
    { src: '', label: 'FOTO PRODUCTO 4', alt: 'Foto del producto 4' },
  ],
  crazyEights: [
    { src: '', label: 'FOTO CRAZY EIGHTS', alt: 'Evidencia de Crazy Eights' },
    { src: '', label: 'FOTO DE BOCETOS', alt: 'Bocetos del proyecto' },
    { src: '', label: 'FOTO DE IDEAS', alt: 'Ideas del proyecto' },
  ],
}

export const ingredients = [
  { name: 'Zapallo Chiclayo', icon: 'pumpkin', role: 'Forma parte de la base vegetal de la receta.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE ZAPALLO CHICLAYO' },
  { name: 'Camote', icon: 'leaf', role: 'Forma parte de la base vegetal de la receta.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE CAMOTE' },
  { name: 'Canela', icon: 'sparkle', role: 'Aporta el perfil aromático de la preparación.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE CANELA' },
  { name: 'Clavo de olor', icon: 'sparkle', role: 'Complementa el aroma de la preparación.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE CLAVO DE OLOR' },
  { name: 'Anís', icon: 'sparkle', role: 'Aporta aroma a la receta.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE ANÍS' },
  { name: 'Harina de garbanzo', icon: 'grain', role: 'Ingrediente clave para elevar el nivel de proteínas vegetales.', nutrition: 'El proyecto la relaciona con el aporte de proteínas vegetales.', asset: 'FOTO DE HARINA DE GARBANZO' },
  { name: 'Harina común', icon: 'grain', role: 'Se incorpora en la masa de la galleta.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE HARINA COMÚN' },
  { name: 'Huevos', icon: 'egg', role: 'Se incorporan durante el mezclado de la masa.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE HUEVOS' },
  { name: 'Esencia de vainilla', icon: 'sparkle', role: 'Complementa el aroma y sabor de la receta.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE ESENCIA DE VAINILLA' },
  { name: 'Panela', icon: 'cube', role: 'Forma parte de la preparación de la receta.', nutrition: 'Aporte nutricional por incorporar desde los documentos del proyecto.', asset: 'FOTO DE PANELA' },
]

export const designPhases = [
  { number: '01', title: 'Empatizar', short: 'Escuchar y observar', detail: 'Exploración del problema mediante entrevistas y observación de los hábitos de consumo.' },
  { number: '02', title: 'Definir', short: 'Delimitar el reto', detail: 'Definición del problema relacionado con la alimentación y disponibilidad de productos saludables.' },
  { number: '03', title: 'Idear', short: 'Abrir posibilidades', detail: 'Generación de diferentes alternativas.' },
  { number: '04', title: 'Prototipar', short: 'Probar en la práctica', detail: 'Desarrollo de picarones, churros y posteriormente la galleta.' },
  { number: '05', title: 'Evaluar', short: 'Aprender con usuarios', detail: 'Pruebas y validación con usuarios.' },
]

export const businessCanvas = [
  { id: 'partners', title: 'Alianzas clave', text: 'Proveedores de zapallo, proveedores de camote, productores de garbanzo y quiosco/colegio.' },
  { id: 'activities', title: 'Actividades clave', text: 'Hervido aromático, amasado, horneado, control de calidad y empaquetado.' },
  { id: 'resources', title: 'Recursos clave', text: 'Horno, moldes, ingredientes y receta propia.' },
  { id: 'value', title: 'Propuesta de valor', text: 'Galletas proteicas artesanales horneadas, con ingredientes nutritivos y precio accesible.' },
  { id: 'relations', title: 'Relaciones con clientes', text: 'Trato directo, degustaciones y pedidos por WhatsApp.' },
  { id: 'channels', title: 'Canales', text: 'Venta directa y pedidos por mensajería.' },
  { id: 'segments', title: 'Segmentos de clientes', text: 'Estudiantes, deportistas escolares, docentes y personal.' },
  { id: 'costs', title: 'Estructura de costos', text: 'Harinas, verduras, huevos, panela, empaques y energía.' },
  { id: 'revenue', title: 'Fuentes de ingresos', text: 'Venta individual y promociones por volumen.' },
]

export const galleryItems = [
  ['Producto', 'FOTO DE PRODUCTO 01'], ['Producto', 'FOTO DE PRODUCTO 02'],
  ['Ingredientes', 'FOTO DE INGREDIENTES'], ['Ingredientes', 'FOTO DE INSUMOS'],
  ['Preparación', 'FOTO DE PREPARACIÓN'], ['Preparación', 'FOTO DE HORNEADO'],
  ['Prototipos', 'FOTO DEL PRIMER PROTOTIPO'], ['Prototipos', 'FOTO DEL SEGUNDO PROTOTIPO'],
  ['Design Thinking', 'FOTO DE EMPATIZAR'], ['Design Thinking', 'FOTO DE CRAZY EIGHTS'],
  ['Validación', 'FOTO DE VALIDACIÓN'], ['Validación', 'GRÁFICO O EVIDENCIA DE VALIDACIÓN'],
  ['Equipo', 'FOTO DEL EQUIPO'], ['Publicidad', 'FOTO DE PUBLICIDAD'], ['Publicidad', 'FOTO DE VENTAS'],
].map(([category, label], index) => ({ id: index + 1, category, label, src: '', alt: label }))

export const videos = [
  { title: 'Video de entrevista', description: 'Registro de una entrevista durante la etapa de empatía.', url: '', label: 'VIDEO DE ENTREVISTA' },
  { title: 'Proceso de preparación', description: 'Registro del proceso de elaboración de NUTRIVELT.', url: '', label: 'VIDEO DEL PROCESO DE PREPARACIÓN' },
  { title: 'Video publicitario', description: 'Espacio para una pieza de publicidad del proyecto.', url: '', label: 'VIDEO PUBLICITARIO' },
  { title: 'Video de validación', description: 'Registro de la validación con usuarios.', url: '', label: 'VIDEO DE VALIDACIÓN' },
  { title: 'Video de presentación', description: 'Presentación audiovisual del proyecto.', url: '', label: 'VIDEO DE PRESENTACIÓN' },
]

export const interviewQuestions = [
  '¿Cómo es tu alimentación durante un día normal?',
  '¿Qué snacks consumes habitualmente?',
  '¿Qué factores priorizas al comprar un snack?',
  '¿Qué te molesta de los snacks actuales?',
  '¿Cómo sería tu galleta ideal?',
  '¿Pagarías S/ 3.00 por un envase?',
  '¿Qué significa para ti alimentarte bien?',
]

export const faqs = [
  ['¿Qué es NUTRIVELT?', 'Es una galleta o snack nutritivo artesanal horneado, desarrollado por Clúster Élan como proyecto escolar de emprendimiento.'],
  ['¿De qué está hecha la galleta?', 'Se elabora principalmente con camote, zapallo, harina de garbanzo, harina común, huevos, panela, anís, canela, clavo de olor y esencia de vainilla.'],
  ['¿Cuánto cuesta?', 'El envase individual cuesta S/ 3.00. También hay una promoción de 2 envases por S/ 5.00.'],
  ['¿Dónde puedo comprarla?', 'La propuesta considera venta directa y pedidos por mensajería. El canal específico puede configurarse al añadir los datos de contacto.'],
  ['¿Puedo pedir más de una?', 'Sí. Actualmente la propuesta presenta una promoción de 2 envases por S/ 5.00.'],
  ['¿Qué toppings tiene?', 'Se pueden incluir maní, almendras, pasas y maní confitado como toppings opcionales.'],
  ['¿Cómo se prepara?', 'El recorrido incluye preparación vegetal, hervor aromático, elaboración del puré, mezclado de la masa, incorporación de toppings y horneado.'],
  ['¿Quién desarrolló el proyecto?', 'El proyecto fue desarrollado por Clúster Élan en la I.E. Roosevelt. El estudiante consignado es Jhonatan Bringas Vasquez.'],
]
