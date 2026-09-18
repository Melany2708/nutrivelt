/*
 * NUTRIVELT — centro de contenido editable
 * ---------------------------------------------------------------
 * Configuración principal del proyecto.
 * Las fotografías disponibles se reutilizan cuando no existe
 * una fotografía específica para una sección.
 */

window.NUTRIVELT_CONFIG = {
  project: {
    name: 'NUTRIVELT',
    tagline: 'Una nueva forma de disfrutar lo nutritivo',
    description:
      'NUTRIVELT es una galleta proteica artesanal horneada, elaborada con ingredientes como camote, zapallo, harina de garbanzo, harina común, huevo, panela, anís, canela, clavo de olor y vainilla.',
    year: '2026',
    team: 'Clúster Élan',
    institution: 'Colegio Privado Preuniversitario "Roosevelt"',
    institutionShort: 'Roosevelt',
    student: 'Jhonatan Bringas Vasquez',
    institutionCode: '1722214',
    modularCode: 'NUTRIVELT-2026',
    category: 'CATEGORÍA B'
  },

  prices: {
    unit: 'S/ 3.00',
    offer: '2 envases por S/ 5.00'
  },

  socialLinks: {
    whatsapp: '#contacto',
    instagram: '#galeria',
    facebook: '#galeria',
    tiktok: '#galeria'
  },

  media: {
    logos: {
      institution: {
        src: 'assets/images/LogoConFondoRoosevelt (1).png',
        alt: 'Logo del Colegio Privado Preuniversitario Roosevelt'
      },
      project: {
        src: 'assets/images/logonutrivelt.jpeg',
        alt: 'Logo de NUTRIVELT'
      }
    },

    hero: {
      src: 'assets/images/Foto principal del Producto_.jpg',
      alt: 'Fotografía principal del producto NUTRIVELT'
    },

    problem: {
      src: 'assets/images/Imagen del problema_.jpg',
      alt: 'Evidencia visual del problema identificado'
    },

    problemEvidence: {
      src: 'assets/images/Imagen del problema.jpg',
      alt: 'Evidencia complementaria del problema'
    },

    innovation: {
      src: 'assets/images/Foto principal del Producto_.jpg',
      alt: 'Producto NUTRIVELT como resultado de la innovación',
      label: 'Evolución del producto NUTRIVELT'
    },

    empathyMap: {
      src: 'assets/images/Imagen del problema_.jpg',
      alt: 'Representación del análisis de empatía del proyecto',
      label: 'Mapa de empatía del proyecto'
    },

    cover: {
      src: 'assets/images/Foto principal del Producto_.jpg',
      alt: 'Fotografía representativa de NUTRIVELT',
      label: 'NUTRIVELT — Clúster Élan'
    }
  },

  solutionSteps: [
    {
      title: 'Preparación vegetal',
      text: 'Se preparan el camote y el zapallo para incorporarlos posteriormente a la receta.',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Preparación de los ingredientes vegetales'
      }
    },
    {
      title: 'Hervor aromático',
      text: 'Se realiza el hervor de los ingredientes aromáticos utilizados en la preparación.',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Preparación de ingredientes'
      }
    },
    {
      title: 'Elaboración del puré',
      text: 'El camote y el zapallo son trabajados hasta obtener la preparación necesaria para la masa.',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Elaboración de la preparación vegetal'
      }
    },
    {
      title: 'Mezclado de la masa',
      text: 'Se integran los ingredientes hasta obtener una masa adecuada para formar las galletas.',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Mezclado de la masa'
      }
    },
    {
      title: 'Incorporación de toppings',
      text: 'Se pueden incorporar toppings como maní, almendras, pasas y maní confitado.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Presentación con toppings'
      }
    },
    {
      title: 'Horneado',
      text: 'La preparación se lleva al horno para obtener el producto final.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Producto NUTRIVELT horneado'
      }
    }
  ],

  ingredients: [
    {
      name: 'Zapallo Chiclayo',
      description:
        'Ingrediente vegetal utilizado como parte de la base de la preparación.',
      note:
        'Aporta características propias de un ingrediente vegetal y participa en la elaboración de la masa.',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Fotografía del zapallo utilizado en la receta'
      }
    },
    {
      name: 'Camote',
      description:
        'Ingrediente vegetal utilizado como uno de los componentes principales de la preparación.',
      note:
        'Forma parte de la base de la receta y aporta sabor, textura y componentes propios del alimento.',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Fotografía del camote utilizado en la receta'
      }
    },
    {
      name: 'Canela',
      description:
        'Ingrediente aromático utilizado para aportar sabor y aroma a la preparación.',
      note:
        'Se incorpora como parte de los ingredientes aromáticos de NUTRIVELT.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de canela'
      }
    },
    {
      name: 'Clavo de olor',
      description:
        'Especia aromática utilizada en la elaboración de la receta.',
      note:
        'Contribuye al perfil aromático y característico del producto.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de clavo de olor'
      }
    },
    {
      name: 'Anís',
      description:
        'Ingrediente aromático incorporado durante la preparación.',
      note:
        'Aporta aroma y sabor característico a la receta.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de anís'
      }
    },
    {
      name: 'Harina de garbanzo',
      description:
        'Ingrediente empleado para aportar una fuente vegetal de proteínas dentro de la propuesta.',
      note:
        'Es un ingrediente importante de la receta por su aporte de proteínas vegetales.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de harina de garbanzo'
      }
    },
    {
      name: 'Harina común',
      description:
        'Ingrediente utilizado como parte de la estructura de la masa.',
      note:
        'Participa en la formación de la masa de la galleta.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de harina común'
      }
    },
    {
      name: 'Huevos',
      description:
        'Ingrediente utilizado en la elaboración de la masa.',
      note:
        'Participa en la estructura y preparación de la mezcla.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de huevos'
      }
    },
    {
      name: 'Esencia de vainilla',
      description:
        'Ingrediente aromático incorporado para complementar el sabor de la preparación.',
      note:
        'Forma parte de los ingredientes utilizados en la receta.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de esencia de vainilla'
      }
    },
    {
      name: 'Panela',
      description:
        'Ingrediente utilizado para aportar dulzor a la preparación.',
      note:
        'Forma parte de la formulación de NUTRIVELT.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de panela'
      }
    }
  ],

  competition: [
    {
      product: 'Galletas industriales y snacks procesados',
      features:
        'Alternativas convencionales disponibles para consumo rápido.',
      strengths:
        'Amplia disponibilidad y precios que pueden encontrarse desde aproximadamente S/ 1.00.',
      limits:
        'No corresponden a la propuesta artesanal y nutritiva planteada por NUTRIVELT.'
    },
    {
      product: 'Barras proteicas y galletas fitness',
      features:
        'Productos orientados principalmente a consumidores interesados en alternativas deportivas o fitness.',
      strengths:
        'Oferta especializada y asociada al consumo de productos proteicos.',
      limits:
        'El proyecto identifica precios aproximados entre S/ 6.00 y S/ 8.00.'
    },
    {
      product: 'NUTRIVELT',
      features:
        'Galleta proteica artesanal horneada elaborada con ingredientes seleccionados y envase biodegradable.',
      strengths:
        'Precio accesible, elaboración artesanal y propuesta orientada inicialmente a estudiantes.',
      limits:
        'Proyecto escolar en etapa de desarrollo y validación comercial.'
    }
  ],

  designThinking: [
    {
      id: 'empathize',
      number: '01',
      title: 'Empatizar',
      summary:
        'Exploración del problema mediante entrevistas, observación y acercamiento a los usuarios.',
      result:
        'Se identificaron hábitos de consumo y la necesidad de contar con alternativas de snacks nutritivos y accesibles.',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Evidencia de empatizar'
      }
    },
    {
      id: 'define',
      number: '02',
      title: 'Definir',
      summary:
        'Organización de los hallazgos para delimitar el problema principal.',
      result:
        'El reto se centró en crear un snack nutritivo, económico y agradable utilizando ingredientes accesibles.',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Evidencia de definir'
      }
    },
    {
      id: 'ideate',
      number: '03',
      title: 'Idear',
      summary:
        'Generación de diferentes alternativas para responder al reto.',
      result:
        'Se utilizaron diferentes ideas y posteriormente la técnica Crazy Eights para ampliar las alternativas de solución.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia de ideación'
      }
    },
    {
      id: 'prototype',
      number: '04',
      title: 'Prototipar',
      summary:
        'Construcción, prueba y modificación de diferentes propuestas.',
      result:
        'El proyecto evolucionó desde los picarones de camote y zapallo hasta los churros de garbanzo y finalmente NUTRIVELT.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia de prototipado'
      }
    },
    {
      id: 'evaluate',
      number: '05',
      title: 'Evaluar',
      summary:
        'Prueba de la propuesta y recopilación de aprendizajes.',
      result:
        'La evaluación permitió identificar aspectos del producto, precio y aceptación que debían considerarse para continuar mejorándolo.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia de evaluación'
      }
    }
  ],

  interview: {
    video: {
      url: 'assets/images/Imagen del problema_.jpg',
      title: 'Registro fotográfico de entrevistas',
      description:
        'Evidencia fotográfica de la etapa de empatía y recopilación de información de los usuarios.',
      date: 'Proyecto NUTRIVELT — 2026'
    },

    questions: [
      {
        question: '¿Cómo es tu alimentación durante un día normal?',
        answer:
          'Pregunta utilizada para conocer los hábitos alimenticios cotidianos de los usuarios.'
      },
      {
        question: '¿Qué snacks consumes habitualmente?',
        answer:
          'Pregunta orientada a identificar los productos que forman parte del consumo habitual.'
      },
      {
        question: '¿Qué factores priorizas al comprar un snack?',
        answer:
          'Pregunta utilizada para conocer los criterios de compra considerados por los usuarios.'
      },
      {
        question: '¿Qué te molesta de los snacks actuales?',
        answer:
          'Pregunta orientada a identificar necesidades y aspectos que pueden mejorarse.'
      },
      {
        question: '¿Cómo sería tu galleta ideal?',
        answer:
          'Pregunta utilizada para conocer las características esperadas por los consumidores.'
      },
      {
        question: '¿Pagarías S/ 3.00 por un envase?',
        answer:
          'Pregunta relacionada con la aceptación del precio propuesto para NUTRIVELT.'
      },
      {
        question: '¿Qué significa para ti alimentarte bien?',
        answer:
          'Pregunta utilizada para comprender la percepción de los usuarios sobre una alimentación adecuada.'
      },
      {
        question: '¿Qué sabor prefieres en un snack?',
        answer:
          'Pregunta orientada a conocer las preferencias de sabor de los consumidores.'
      },
      {
        question: '¿Qué presentación te resulta más práctica?',
        answer:
          'Pregunta destinada a conocer preferencias sobre la presentación del producto.'
      },
      {
        question: '¿Qué ingredientes reconoces como nutritivos?',
        answer:
          'Pregunta utilizada para conocer la percepción de los consumidores sobre los ingredientes.'
      },
      {
        question: '¿Comprarías un snack elaborado artesanalmente?',
        answer:
          'Pregunta orientada a conocer la disposición de compra ante una propuesta artesanal.'
      },
      {
        question: '¿Recomendarías un producto como NUTRIVELT?',
        answer:
          'Pregunta relacionada con la percepción general y disposición a recomendar el producto.'
      },
      {
        question: '¿Qué mejorarías de una galleta nutritiva?',
        answer:
          'Pregunta utilizada para identificar oportunidades de mejora del producto.'
      }
    ]
  },

  ideationGallery: [
    {
      title: 'Evidencia de ideación 01',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Evidencia fotográfica de ideación'
      }
    },
    {
      title: 'Evidencia de ideación 02',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Evidencia fotográfica de ideación'
      }
    },
    {
      title: 'Evidencia de ideación 03',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia fotográfica de ideación'
      }
    },
    {
      title: 'Evidencia de ideación 04',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia fotográfica de ideación'
      }
    }
  ],

  prototypeJourney: [
    {
      name: 'Prototipo I',
      subtitle: 'Picarones de camote y zapallo',
      date: '2026',
      description:
        'La primera alternativa utilizó camote y zapallo como base. La preparación no alcanzó la textura esperada.',
      result:
        'El resultado permitió identificar aspectos que debían modificarse en la preparación.',
      learning:
        'Los primeros prototipos permiten detectar errores y convertirlos en aprendizajes.',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Fotografía del proceso del Prototipo I'
      }
    },
    {
      name: 'Pivote',
      subtitle: 'Cambio de enfoque',
      date: '2026',
      description:
        'A partir de los resultados obtenidos se decidió modificar la propuesta y explorar una nueva preparación.',
      result:
        'El proyecto pasó de una preparación tipo picarón a una alternativa diferente.',
      learning:
        'El pivotaje permite modificar una estrategia aprovechando lo aprendido en las pruebas anteriores.',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Evidencia del cambio de enfoque'
      }
    },
    {
      name: 'Prototipo II',
      subtitle: 'Churros de garbanzo',
      date: '2026',
      description:
        'Se desarrolló una nueva alternativa utilizando garbanzo como ingrediente relevante.',
      result:
        'Nuevamente se presentaron dificultades relacionadas con la consistencia del producto.',
      learning:
        'La experimentación permitió reconocer que era necesario continuar ajustando la técnica.',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Fotografía del Prototipo II'
      }
    },
    {
      name: 'Evolución',
      subtitle: 'Ocho Locos',
      date: '2026',
      description:
        'Después de los intentos anteriores se recurrió a nuevas ideas mediante la técnica Crazy Eights.',
      result:
        'Se generaron diferentes posibilidades para transformar los aprendizajes anteriores en una nueva solución.',
      learning:
        'La creatividad estructurada ayudó a ampliar las alternativas antes de consolidar el producto.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia de evolución de ideas'
      }
    },
    {
      name: 'Estandarización',
      subtitle: 'NUTRIVELT',
      date: '2026',
      description:
        'La propuesta se consolidó como una galleta proteica artesanal horneada.',
      result:
        'NUTRIVELT se estableció como la solución desarrollada por el equipo Clúster Élan.',
      learning:
        'La prueba, el error, el aprendizaje y la adaptación permitieron evolucionar hasta la propuesta final.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía del producto NUTRIVELT'
      }
    }
  ],

  survey: {
    targetResponses: 10,
    completedResponses: 10,
    note:
      'Se realizó una encuesta de aceptación de precio aplicada a 10 personas. La pregunta evaluó la aceptación del precio de 1 envase por S/ 3.00 y 2 envases por S/ 5.00.',
    results: []
  },

  validationPlan: [
    {
      phase: 'Validación inicial',
      hypothesis:
        'El público objetivo considera necesaria una alternativa de snack nutritivo y accesible.',
      actions:
        'Realizar entrevistas, observar hábitos de consumo y recoger opiniones sobre snacks.',
      indicators:
        'Opiniones obtenidas, necesidades identificadas y características solicitadas por los usuarios.',
      time: 'Etapa inicial del proyecto — 2026.'
    },
    {
      phase: 'Prueba de producto',
      hypothesis:
        'Una galleta artesanal elaborada con ingredientes seleccionados puede ser una alternativa aceptable para el público objetivo.',
      actions:
        'Desarrollar prototipos, realizar pruebas y recoger aprendizajes de cada preparación.',
      indicators:
        'Textura, sabor, presentación, facilidad de consumo y comentarios de los usuarios.',
      time: 'Etapa de prototipado — 2026.'
    },
    {
      phase: 'Ajuste y venta',
      hypothesis:
        'La propuesta final puede comercializarse mediante un precio accesible y una presentación práctica.',
      actions:
        'Estandarizar la receta, establecer precios y realizar actividades de venta y promoción.',
      indicators:
        'Aceptación del precio, interés de compra, pedidos y comentarios de los consumidores.',
      time: 'Etapa de validación comercial — 2026.'
    }
  ],

  gantt: {
    weeks: 14,

    tasks: [
      {
        name: 'Situación problemática',
        start: 1,
        duration: 1
      },
      {
        name: 'Diagnóstico de oferta',
        start: 1,
        duration: 2
      },
      {
        name: 'Pregunta reto',
        start: 2,
        duration: 1
      },
      {
        name: 'Clientes',
        start: 2,
        duration: 2
      },
      {
        name: 'Segmentación',
        start: 3,
        duration: 1
      },
      {
        name: 'Competidores',
        start: 3,
        duration: 2
      },
      {
        name: 'Propuesta de valor',
        start: 4,
        duration: 2
      },
      {
        name: 'Canales',
        start: 5,
        duration: 1
      },
      {
        name: 'Solución',
        start: 5,
        duration: 2
      },
      {
        name: 'Prototipo I',
        start: 6,
        duration: 1
      },
      {
        name: 'Prototipo II',
        start: 7,
        duration: 1
      },
      {
        name: 'Estandarización',
        start: 8,
        duration: 1
      },
      {
        name: 'Pruebas',
        start: 9,
        duration: 1
      },
      {
        name: 'Viabilidad',
        start: 9,
        duration: 2
      },
      {
        name: 'Modelo Canvas',
        start: 10,
        duration: 1
      },
      {
        name: 'Costos y precio',
        start: 10,
        duration: 2
      },
      {
        name: 'Validación',
        start: 11,
        duration: 1
      },
      {
        name: 'Venta comercial',
        start: 12,
        duration: 2
      },
      {
        name: 'Informe final',
        start: 13,
        duration: 2
      }
    ]
  },

  leanCanvas: [
    {
      title: '1. Problema',
      text:
        'Consumo de snacks de bajo aporte nutritivo y necesidad de alternativas accesibles dentro de espacios educativos.'
    },
    {
      title: '2. Segmento de clientes',
      text:
        'Estudiantes, deportistas escolares, docentes y personal de instituciones educativas.'
    },
    {
      title: '3. Propuesta única de valor',
      text:
        'Galletas proteicas artesanales horneadas, con ingredientes nutritivos y precio accesible.'
    },
    {
      title: '4. Solución',
      text:
        'Desarrollo de una galleta nutritiva mediante ingredientes seleccionados, elaboración artesanal y horneado.'
    },
    {
      title: '5. Canales',
      text:
        'Venta directa, pedidos por mensajería, espacios educativos y comunicación mediante redes sociales.'
    },
    {
      title: '6. Métricas clave',
      text:
        'Aceptación del producto, aceptación del precio, intención de compra, pedidos realizados y comentarios de los consumidores.'
    },
    {
      title: '7. Ventaja injusta',
      text:
        'Propuesta desarrollada mediante un proceso de experimentación, pivotaje y adaptación orientado a las necesidades identificadas.'
    },
    {
      title: '8. Flujo de ingresos',
      text:
        'Venta individual a S/ 3.00 y promoción de 2 envases por S/ 5.00.'
    },
    {
      title: '9. Estructura de costos',
      text:
        'Harinas, verduras, huevos, panela, especias, toppings, empaques y energía utilizada durante la elaboración.'
    }
  ],

  acquisition: [
    {
      title: 'Fotografía publicitaria',
      description:
        'Material visual utilizado para presentar NUTRIVELT y comunicar su propuesta.',
      link: '#galeria',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía publicitaria de NUTRIVELT'
      }
    },
    {
      title: 'Afiches',
      description:
        'Material gráfico destinado a comunicar el producto y su propuesta de valor.',
      link: '#galeria',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía representativa de material publicitario'
      }
    },
    {
      title: 'Redes sociales',
      description:
        'Canales digitales considerados para la comunicación y promoción del proyecto.',
      link: '#contacto',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Contenido visual para redes sociales'
      }
    },
    {
      title: 'Venta directa',
      description:
        'Canal de comercialización basado en el contacto directo con los consumidores.',
      link: '#pedido',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia visual de venta directa'
      }
    },
    {
      title: 'Promociones',
      description:
        'Presentación comercial de la promoción de 2 envases por S/ 5.00.',
      link: '#pedido',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Material visual de promoción'
      }
    }
  ],

  retention: [
    {
      client: 'Estudiantes',
      action:
        'Mantener una propuesta accesible, práctica y agradable para el consumo durante la jornada educativa.',
      evidence:
        'Comentarios de usuarios, aceptación del producto y disposición de compra.'
    },
    {
      client: 'Deportistas escolares',
      action:
        'Comunicar la propuesta como una alternativa práctica dentro de sus hábitos de consumo.',
      evidence:
        'Opiniones y comentarios obtenidos durante la validación.'
    },
    {
      client: 'Docentes y personal',
      action:
        'Facilitar el acceso al producto mediante venta directa y pedidos.',
      evidence:
        'Interés de compra, comentarios y pedidos realizados.'
    }
  ],

  gallery: [
    {
      category: 'Problema',
      title: 'Evidencia del problema',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Fotografía del problema identificado'
      }
    },
    {
      category: 'Entrevistas',
      title: 'Etapa de empatía',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Evidencia fotográfica de entrevistas'
      }
    },
    {
      category: 'Ideación',
      title: 'Generación de ideas',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia fotográfica de ideación'
      }
    },
    {
      category: 'Prototipos',
      title: 'Evolución de prototipos',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Evidencia de prototipado'
      }
    },
    {
      category: 'Producción',
      title: 'Elaboración del producto',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Evidencia de producción'
      }
    },
    {
      category: 'Validación',
      title: 'Validación del producto',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia de validación'
      }
    },
    {
      category: 'Ventas',
      title: 'Presentación comercial',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía del producto para venta'
      }
    },
    {
      category: 'Equipo',
      title: 'Equipo Clúster Élan',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía representativa del equipo y proyecto'
      }
    }
  ],

  /*
   * Los antiguos elementos de video se mantienen como una colección
   * para evitar romper componentes existentes, pero ahora utilizan
   * fotografías en lugar de videos.
   */
  videos: [
    {
      title: 'Entrevista del proyecto',
      description:
        'Registro fotográfico de la etapa de entrevistas y empatía.',
      date: '2026',
      url: 'assets/images/Imagen del problema_.jpg',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Fotografía de la etapa de entrevistas'
      }
    },
    {
      title: 'Proceso de elaboración',
      description:
        'Registro fotográfico relacionado con la preparación de NUTRIVELT.',
      date: '2026',
      url: 'assets/images/Imagen del problema.jpg',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Fotografía del proceso de elaboración'
      }
    },
    {
      title: 'Validación con usuarios',
      description:
        'Registro fotográfico representativo de la etapa de validación.',
      date: '2026',
      url: 'assets/images/Foto principal del Producto_.jpg',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía de validación del producto'
      }
    },
    {
      title: 'Presentación del producto',
      description:
        'Fotografía representativa de NUTRIVELT como producto final.',
      date: '2026',
      url: 'assets/images/Foto principal del Producto_.jpg',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía del producto NUTRIVELT'
      }
    }
  ],

  evidence: [
    {
      type: 'Fotografía',
      description:
        'Registro fotográfico de las actividades realizadas durante el desarrollo del proyecto.',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia fotográfica'
      },
      link: '#galeria'
    },
    {
      type: 'Proceso',
      description:
        'Evidencia visual del desarrollo y elaboración de la propuesta.',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Evidencia del proceso'
      },
      link: '#proceso'
    },
    {
      type: 'Documento',
      description:
        'Documentación correspondiente al desarrollo del proyecto NUTRIVELT.',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Evidencia documental del proyecto'
      },
      link: '#evidencias'
    },
    {
      type: 'Encuesta',
      description:
        'Encuesta de aceptación de precio aplicada a 10 personas.',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Evidencia de encuesta'
      },
      link: '#validacion'
    },
    {
      type: 'Producto',
      description:
        'Presentación visual del producto final NUTRIVELT.',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Producto final NUTRIVELT'
      },
      link: '#producto'
    },
    {
      type: 'Registro',
      description:
        'Registro visual del desarrollo del emprendimiento escolar.',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Registro del proyecto'
      },
      link: '#galeria'
    },
    {
      type: 'Presentación',
      description:
        'Material visual representativo del proyecto Clúster Élan.',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Presentación de NUTRIVELT'
      },
      link: '#inicio'
    }
  ],

  annexes: [
    {
      title: 'Documentación del proyecto NUTRIVELT',
      link: '#evidencias'
    },
    {
      title: 'Registros de validación',
      link: '#validacion'
    },
    {
      title: 'Evidencias del proceso',
      link: '#galeria'
    },
    {
      title: 'Materiales de presentación',
      link: '#galeria'
    }
  ],

  team: [
    {
      name: 'Jhonatan Bringas Vasquez',
      role: 'Integrante del equipo Clúster Élan',
      description:
        'Integrante encargado del desarrollo y presentación del proyecto escolar NUTRIVELT.',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Fotografía representativa del integrante'
      }
    }
  ]
};
