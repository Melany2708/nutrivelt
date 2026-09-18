/*
 * NUTRIVELT — centro de contenido editable
 * ---------------------------------------------------------------
 * Configuración completa del proyecto.
 * Se eliminaron asesores, videos y campos vacíos.
 */

window.NUTRIVELT_CONFIG = {

  project: {
    name: 'NUTRIVELT',
    tagline: 'Snack nutritivo, accesible y pensado para todos',
    description:
      'NUTRIVELT es un snack elaborado a base de ingredientes seleccionados como camote, zapallo y harina de garbanzo, pensado como una alternativa práctica, agradable y accesible para estudiantes y familias.',
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
    whatsapp: 'https://wa.me/51999999999',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    tiktok: 'https://www.tiktok.com/'
  },

  media: {

    logos: {
      institution: {
        src: 'assets/images/LogoConFondoRoosevelt (1).png'
      },
      project: {
        src: 'assets/images/logonutrivelt.jpeg'
      }
    },

    hero: {
      src: 'assets/images/Foto principal del Producto_.jpg',
      alt: 'Producto principal NUTRIVELT'
    },

    problem: {
      src: 'assets/images/Imagen del problema_.jpg',
      alt: 'Situación problemática identificada'
    },

    problemEvidence: {
      src: 'assets/images/Imagen del problema.jpg',
      alt: 'Evidencia de la situación problemática'
    },

    innovation: {
      src: 'assets/images/Tercer prototipo - evolución_.jpg',
      alt: 'Evolución e innovación de NUTRIVELT',
      label: 'Evolución del producto'
    },

    empathyMap: {
      src: 'assets/images/mapaempatia.png',
      alt: 'Mapa de empatía de NUTRIVELT',
      label: 'Mapa de empatía'
    },

    cover: {
      src: 'assets/images/productofoto.jpeg',
      alt: 'Presentación de NUTRIVELT',
      label: 'Producto NUTRIVELT'
    }
  },


  solutionSteps: [

    {
      title: 'Ingredientes',
      text: 'Selección y organización de los ingredientes necesarios para elaborar NUTRIVELT.',
      media: {
        src: 'assets/images/Foto de los ingredientes_.jpg',
        label: 'Ingredientes de NUTRIVELT'
      }
    },

    {
      title: 'Preparación',
      text: 'Se pesan, mezclan y trabajan los ingredientes hasta obtener una preparación uniforme.',
      media: {
        src: 'assets/images/Preparación.jpg',
        label: 'Preparación de NUTRIVELT'
      }
    },

    {
      title: 'Horneado',
      text: 'La preparación pasa por un proceso de horneado para conseguir la textura y presentación buscadas.',
      media: {
        src: 'assets/images/Horneado_.jpg',
        label: 'Horneado de NUTRIVELT'
      }
    },

    {
      title: 'Producto final',
      text: 'El producto terminado se presenta en un envase práctico, listo para su consumo y comercialización.',
      media: {
        src: 'assets/images/Foto del procuto final_.jpg',
        label: 'Producto final NUTRIVELT'
      }
    }
  ],


  ingredients: [

    {
      name: 'Camote',
      description: 'Ingrediente natural utilizado como parte de la base de la preparación.',
      note: 'Aporta sabor, textura y características propias del camote.',
      media: {
        src: 'assets/images/camote.jpg',
        label: 'Camote'
      }
    },

    {
      name: 'Zapallo',
      description: 'Ingrediente vegetal incorporado para complementar la preparación.',
      note: 'Contribuye al sabor, color y textura del producto.',
      media: {
        src: 'assets/images/zapallojpg.jpg',
        label: 'Zapallo'
      }
    },

    {
      name: 'Anís',
      description: 'Especia empleada para aportar aroma y sabor característico.',
      note: 'Ayuda a darle una identidad aromática agradable al producto.',
      media: {
        src: 'assets/images/anis.jpg',
        label: 'Anís'
      }
    },

    {
      name: 'Harina de garbanzo',
      description: 'Ingrediente utilizado como fuente vegetal y parte importante de la formulación.',
      note: 'Permite desarrollar una preparación diferente a los snacks convencionales.',
      media: {
        src: 'assets/images/HARINA DE GARBANZO.jpg',
        label: 'Harina de garbanzo'
      }
    },

    {
      name: 'Harina común',
      description: 'Ingrediente utilizado para complementar la estructura de la preparación.',
      note: 'Contribuye a conseguir la consistencia adecuada durante la elaboración.',
      media: {
        src: 'assets/images/harina.jpg',
        label: 'Harina común'
      }
    },

    {
      name: 'Huevo',
      description: 'Ingrediente utilizado para integrar y dar estructura a la preparación.',
      note: 'Contribuye a la textura final del producto.',
      media: {
        src: 'assets/images/huevo.jpg',
        label: 'Huevo'
      }
    },

    {
      name: 'Panela',
      description: 'Endulzante utilizado para aportar dulzor a la preparación.',
      note: 'Se incorpora como alternativa al azúcar refinada dentro de la receta.',
      media: {
        src: 'assets/images/panela.jpg',
        label: 'Panela'
      }
    },

    {
      name: 'Canela',
      description: 'Especia utilizada para complementar el sabor del producto.',
      note: 'Aporta aroma y un sabor característico.',
      media: {
        src: 'assets/images/canela.jpg',
        label: 'Canela'
      }
    },

    {
      name: 'Clavo de olor',
      description: 'Especia incorporada en pequeñas cantidades para complementar el perfil aromático.',
      note: 'Aporta un aroma intenso y característico.',
      media: {
        src: 'assets/images/clavo.jpg',
        label: 'Clavo de olor'
      }
    }
  ],


  competition: [

    {
      product: 'Snacks convencionales',
      features:
        'Productos procesados de consumo frecuente, disponibles en tiendas y quioscos.',
      strengths:
        'Fácil disponibilidad, variedad de sabores y precios accesibles.',
      limits:
        'No necesariamente priorizan ingredientes de origen vegetal o una propuesta orientada a mejorar la calidad de la alimentación.'
    },

    {
      product: 'Productos de panadería tradicional',
      features:
        'Preparaciones dulces o saladas elaboradas principalmente con harinas convencionales.',
      strengths:
        'Son conocidos por los consumidores y tienen amplia aceptación.',
      limits:
        'La propuesta nutricional y la combinación de ingredientes puede ser menos diferenciada.'
    },

    {
      product: 'NUTRIVELT',
      features:
        'Snack elaborado con camote, zapallo, harina de garbanzo, especias y otros ingredientes seleccionados.',
      strengths:
        'Propuesta práctica, accesible, diferenciada por sus ingredientes y con presentación pensada para el consumo cotidiano.',
      limits:
        'Es un producto nuevo que necesita seguir fortaleciendo su reconocimiento y aceptación en el mercado.'
    }
  ],


  designThinking: [

    {
      id: 'empathize',
      number: '01',
      title: 'Empatizar',
      summary:
        'Se exploraron las necesidades y hábitos de consumo relacionados con los snacks.',
      result:
        'Se identificó la necesidad de contar con una alternativa práctica y agradable frente al consumo frecuente de snacks convencionales.',
      media: {
        src: 'assets/images/Foto de empatizar_.jpg',
        label: 'Evidencia de empatizar'
      }
    },

    {
      id: 'define',
      number: '02',
      title: 'Definir',
      summary:
        'Se organizó la información obtenida para establecer el problema principal.',
      result:
        'El reto se centró en desarrollar un snack accesible que incorpore ingredientes seleccionados y que resulte atractivo para el consumidor.',
      media: {
        src: 'assets/images/Imagen del problema.jpg',
        label: 'Definición del problema'
      }
    },

    {
      id: 'ideate',
      number: '03',
      title: 'Idear',
      summary:
        'Se plantearon diferentes alternativas de productos y presentaciones.',
      result:
        'La generación de ideas permitió explorar diferentes opciones hasta orientar el proyecto hacia una propuesta de snack diferenciada.',
      media: {
        src: 'assets/images/Primer prototipo_.jpg',
        label: 'Evidencia de ideación'
      }
    },

    {
      id: 'prototype',
      number: '04',
      title: 'Prototipar',
      summary:
        'Se elaboraron diferentes versiones para comprobar y mejorar la propuesta.',
      result:
        'Los prototipos permitieron realizar cambios progresivos en la preparación, presentación y propuesta del producto.',
      media: {
        src: 'assets/images/Tercer prototipo - evolución_.jpg',
        label: 'Evidencia de prototipado'
      }
    },

    {
      id: 'evaluate',
      number: '05',
      title: 'Evaluar',
      summary:
        'Se observaron los resultados de las pruebas y se identificaron aspectos de mejora.',
      result:
        'La evaluación permitió orientar la versión final hacia una presentación más adecuada para su consumo y comercialización.',
      media: {
        src: 'assets/images/Foto de resultado de obsevación.jpg',
        label: 'Resultado de evaluación'
      }
    }
  ],


  interview: {
    questions: [

      {
        question: '¿Qué tipo de snacks consumes con mayor frecuencia?',
        answer: 'Los snacks prácticos y fáciles de consumir durante los momentos de descanso.'
      },

      {
        question: '¿Con qué frecuencia consumes snacks?',
        answer: 'El consumo suele realizarse durante los recreos, entre comidas o cuando se necesita un alimento rápido.'
      },

      {
        question: '¿Qué características buscas en un snack?',
        answer: 'Buen sabor, precio accesible, presentación práctica y facilidad para consumirlo.'
      },

      {
        question: '¿Qué importancia tiene para ti que un snack tenga ingredientes seleccionados?',
        answer: 'Es importante porque permite conocer mejor qué se está consumiendo.'
      },

      {
        question: '¿Probarías un snack elaborado con camote y zapallo?',
        answer: 'Sí, especialmente si presenta un sabor agradable y una buena presentación.'
      },

      {
        question: '¿Qué opinas de incorporar harina de garbanzo?',
        answer: 'Es una alternativa diferente que puede hacer más interesante la propuesta.'
      },

      {
        question: '¿Qué presentación prefieres?',
        answer: 'Una presentación individual que sea fácil de transportar y consumir.'
      },

      {
        question: '¿Qué precio considerarías accesible?',
        answer: 'Un precio cercano a S/ 3.00 resulta adecuado para una compra individual.'
      },

      {
        question: '¿Comprarías NUTRIVELT?',
        answer: 'La intención de compra aumenta cuando el producto tiene buen sabor, presentación atractiva y precio accesible.'
      },

      {
        question: '¿Qué mejorarías del producto?',
        answer: 'La presentación, el tamaño de la porción y la variedad de opciones pueden seguir mejorándose.'
      },

      {
        question: '¿Recomendarías el producto a otras personas?',
        answer: 'Sí, si la experiencia de consumo resulta agradable y el producto mantiene un precio accesible.'
      },

      {
        question: '¿Dónde comprarías este producto?',
        answer: 'En el colegio, tiendas cercanas, puntos de venta directos o mediante redes sociales.'
      },

      {
        question: '¿Qué característica te motivaría a comprarlo nuevamente?',
        answer: 'Un sabor agradable, buena calidad, presentación práctica y una relación adecuada entre precio y producto.'
      }
    ]
  },


  ideationGallery: [

    {
      title: 'Evidencia de ideación 01',
      date: '2026',
      media: {
        src: 'assets/images/Primer prototipo_.jpg',
        label: 'Primera propuesta'
      }
    },

    {
      title: 'Evidencia de ideación 02',
      date: '2026',
      media: {
        src: 'assets/images/Segundo prototipo.jpg',
        label: 'Segunda propuesta'
      }
    },

    {
      title: 'Evidencia de ideación 03',
      date: '2026',
      media: {
        src: 'assets/images/Tercer prototipo - evolución_.jpg',
        label: 'Evolución de la propuesta'
      }
    },

    {
      title: 'Evidencia de ideación 04',
      date: '2026',
      media: {
        src: 'assets/images/Foto de resultado de obsevación.jpg',
        label: 'Resultado de observación'
      }
    }
  ],


  prototypeJourney: [

    {
      name: 'Prototipo I',
      subtitle: 'Picarones',
      date: '2026',
      description:
        'Primera aproximación al desarrollo de una propuesta de snack a partir de una preparación conocida.',
      result:
        'Permitió identificar aspectos que podían mejorarse en sabor, presentación y diferenciación.',
      learning:
        'La primera propuesta permitió conocer mejor las preferencias del público y detectar la necesidad de realizar cambios.',
      media: {
        src: 'assets/images/Primer prototipo_.jpg',
        label: 'Prototipo I'
      }
    },

    {
      name: 'Pivote',
      subtitle: 'Cambio de enfoque',
      date: '2026',
      description:
        'Se revisó la propuesta inicial y se decidió orientar el proyecto hacia una alternativa de snack con ingredientes seleccionados.',
      result:
        'El proyecto tomó una dirección más definida y diferenciada.',
      learning:
        'La retroalimentación y la observación permitieron ajustar la idea inicial.',
      media: {
        src: 'assets/images/Segundo prototipo.jpg',
        label: 'Cambio de enfoque'
      }
    },

    {
      name: 'Prototipo II',
      subtitle: 'Churros',
      date: '2026',
      description:
        'Se desarrolló una nueva alternativa para evaluar aceptación, preparación y presentación.',
      result:
        'La nueva versión permitió seguir comparando características y preferencias.',
      learning:
        'Probar diferentes alternativas ayuda a identificar qué elementos deben mantenerse y cuáles necesitan cambios.',
      media: {
        src: 'assets/images/Segundo prototipo.jpg',
        label: 'Prototipo II'
      }
    },

    {
      name: 'Evolución',
      subtitle: 'Ocho Locos',
      date: '2026',
      description:
        'Se continuó experimentando con la propuesta hasta encontrar una orientación más adecuada para el producto.',
      result:
        'La experimentación permitió acercarse progresivamente a la versión final.',
      learning:
        'El prototipado permite aprender mediante la práctica y realizar mejoras sucesivas.',
      media: {
        src: 'assets/images/Tercer prototipo - evolución_.jpg',
        label: 'Evolución del producto'
      }
    },

    {
      name: 'Estandarización',
      subtitle: 'NUTRIVELT',
      date: '2026',
      description:
        'Se consolidó la propuesta NUTRIVELT como snack nutritivo, accesible y pensado para todos.',
      result:
        'Se obtuvo una presentación final lista para continuar con las etapas de validación y comercialización.',
      learning:
        'La mejora progresiva permitió transformar las primeras ideas en una propuesta de producto más definida.',
      media: {
        src: 'assets/images/Foto del procuto final_.jpg',
        label: 'Producto NUTRIVELT'
      }
    }
  ],


  survey: {
    targetResponses: 10,
    completedResponses: 10,
    note:
      'Se consideraron 10 respuestas para conocer la percepción inicial sobre sabor, presentación, precio e intención de compra.',
    results: [
      {
        label: 'Sabor',
        value: 9,
        color: '#e7a44c'
      },
      {
        label: 'Presentación',
        value: 8,
        color: '#e7a44c'
      },
      {
        label: 'Precio',
        value: 8,
        color: '#e7a44c'
      },
      {
        label: 'Intención de compra',
        value: 8,
        color: '#e7a44c'
      }
    ]
  },


  validationPlan: [

    {
      phase: 'Validación inicial',
      hypothesis:
        'Los consumidores mostrarán interés por una alternativa de snack elaborada con ingredientes seleccionados.',
      actions:
        'Presentar la propuesta, explicar sus ingredientes y recoger opiniones sobre sabor, presentación y utilidad.',
      indicators:
        'Número de personas interesadas y comentarios favorables sobre la propuesta.',
      time: 'Semana 9'
    },

    {
      phase: 'Prueba de producto',
      hypothesis:
        'Una presentación práctica y un sabor agradable favorecerán la aceptación del producto.',
      actions:
        'Realizar degustaciones y recoger opiniones sobre sabor, textura, tamaño y presentación.',
      indicators:
        'Nivel de aceptación, comentarios de mejora e intención de compra.',
      time: 'Semana 10'
    },

    {
      phase: 'Ajuste y venta',
      hypothesis:
        'La versión mejorada podrá comercializarse a un precio accesible para el público objetivo.',
      actions:
        'Realizar ajustes finales, establecer precio, presentar el producto y efectuar ventas directas.',
      indicators:
        'Cantidad de unidades vendidas, aceptación del precio y comentarios posteriores a la compra.',
      time: 'Semanas 11 y 12'
    }
  ],


  gantt: {
    weeks: 14,

    tasks: [
      { name: 'Situación problemática', start: 1, duration: 1 },
      { name: 'Diagnóstico de oferta', start: 1, duration: 2 },
      { name: 'Pregunta reto', start: 2, duration: 1 },
      { name: 'Clientes', start: 2, duration: 2 },
      { name: 'Segmentación', start: 3, duration: 1 },
      { name: 'Competidores', start: 3, duration: 2 },
      { name: 'Propuesta de valor', start: 4, duration: 2 },
      { name: 'Canales', start: 5, duration: 1 },
      { name: 'Solución', start: 5, duration: 2 },
      { name: 'Prototipo I', start: 6, duration: 1 },
      { name: 'Prototipo II', start: 7, duration: 1 },
      { name: 'Estandarización', start: 8, duration: 1 },
      { name: 'Pruebas', start: 9, duration: 1 },
      { name: 'Viabilidad', start: 9, duration: 2 },
      { name: 'Modelo Canvas', start: 10, duration: 1 },
      { name: 'Costos y precio', start: 10, duration: 2 },
      { name: 'Validación', start: 11, duration: 1 },
      { name: 'Venta comercial', start: 12, duration: 2 },
      { name: 'Informe final', start: 13, duration: 2 }
    ]
  },


  leanCanvas: [

    {
      title: '1. Problema',
      text:
        'Consumo frecuente de snacks convencionales entre estudiantes y necesidad de contar con alternativas prácticas y accesibles.'
    },

    {
      title: '2. Segmento de clientes',
      text:
        'Estudiantes, jóvenes y personas que buscan una opción práctica de snack para consumir durante el día.'
    },

    {
      title: '3. Propuesta única de valor',
      text:
        'Snack nutritivo, accesible y pensado para todos, elaborado con ingredientes seleccionados y una presentación práctica.'
    },

    {
      title: '4. Solución',
      text:
        'Desarrollo de NUTRIVELT mediante una combinación de ingredientes como camote, zapallo, harina de garbanzo y especias.'
    },

    {
      title: '5. Canales',
      text:
        'Venta directa, WhatsApp, redes sociales, cafetines, tiendas cercanas y recomendaciones entre consumidores.'
    },

    {
      title: '6. Métricas clave',
      text:
        'Unidades vendidas, número de clientes, intención de recompra, aceptación del producto y satisfacción del consumidor.'
    },

    {
      title: '7. Ventaja injusta',
      text:
        'Combinación diferenciada de ingredientes, proceso de experimentación y propuesta orientada a ofrecer una alternativa práctica y accesible.'
    },

    {
      title: '8. Flujo de ingresos',
      text:
        'Venta individual a S/ 3.00 y promoción de 2 envases por S/ 5.00.'
    },

    {
      title: '9. Estructura de costos',
      text:
        'Ingredientes, envases, etiquetas, materiales de elaboración, transporte, promoción y otros gastos asociados a la producción y comercialización.'
    }
  ],


  acquisition: [

    {
      title: 'Publicidad',
      description:
        'Difusión de NUTRIVELT mediante piezas gráficas y fotografías del producto.',
      link: 'https://www.instagram.com/',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Publicidad de NUTRIVELT'
      }
    },

    {
      title: 'Afiches',
      description:
        'Material gráfico para comunicar las características, precio y propuesta de valor.',
      link: 'https://www.facebook.com/',
      media: {
        src: 'assets/images/productofoto.jpeg',
        label: 'Afiche de NUTRIVELT'
      }
    },

    {
      title: 'Redes sociales',
      description:
        'Publicaciones orientadas a mostrar el producto, sus ingredientes y beneficios de la propuesta.',
      link: 'https://www.instagram.com/',
      media: {
        src: 'assets/images/Foto del procuto final_.jpg',
        label: 'Contenido para redes sociales'
      }
    },

    {
      title: 'Venta directa',
      description:
        'Comercialización directa del producto al público objetivo.',
      link: 'https://wa.me/51999999999',
      media: {
        src: 'assets/images/productofoto.jpeg',
        label: 'Evidencia de venta directa'
      }
    },

    {
      title: 'Promociones',
      description:
        'Oferta de dos envases por S/ 5.00 para incentivar la compra de más de una unidad.',
      link: 'https://wa.me/51999999999',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Promoción NUTRIVELT'
      }
    }
  ],


  retention: [

    {
      client: 'Clientes que realizaron una compra',
      action:
        'Solicitar comentarios sobre sabor, presentación y experiencia de consumo, además de comunicar nuevas promociones.',
      evidence:
        'Registro de ventas, comentarios de clientes y seguimiento de intención de recompra.'
    }
  ],


  gallery: [

    {
      category: 'Problema',
      title: 'Evidencia del problema',
      date: '2026',
      media: {
        src: 'assets/images/Imagen del problema_.jpg',
        label: 'Situación problemática'
      }
    },

    {
      category: 'Entrevistas',
      title: 'Empatía con usuarios',
      date: '2026',
      media: {
        src: 'assets/images/Foto de empatizar_.jpg',
        label: 'Evidencia de empatizar'
      }
    },

    {
      category: 'Ideación',
      title: 'Generación de ideas',
      date: '2026',
      media: {
        src: 'assets/images/Primer prototipo_.jpg',
        label: 'Generación de ideas'
      }
    },

    {
      category: 'Prototipos',
      title: 'Evolución de prototipos',
      date: '2026',
      media: {
        src: 'assets/images/Tercer prototipo - evolución_.jpg',
        label: 'Evolución de prototipos'
      }
    },

    {
      category: 'Producción',
      title: 'Proceso de producción',
      date: '2026',
      media: {
        src: 'assets/images/Preparación.jpg',
        label: 'Preparación del producto'
      }
    },

    {
      category: 'Validación',
      title: 'Resultado de observación',
      date: '2026',
      media: {
        src: 'assets/images/Foto de resultado de obsevación.jpg',
        label: 'Validación del producto'
      }
    },

    {
      category: 'Ventas',
      title: 'Presentación comercial',
      date: '2026',
      media: {
        src: 'assets/images/Foto del procuto final_.jpg',
        label: 'Producto listo para venta'
      }
    },

    {
      category: 'Equipo',
      title: 'Equipo Clúster Élan',
      date: '2026',
      media: {
        src: 'assets/images/Logotipo del proyecto.jpg',
        label: 'Equipo del proyecto'
      }
    }
  ],


  evidence: [

    {
      type: 'Fotografía',
      description:
        'Registro fotográfico del proceso de desarrollo y presentación de NUTRIVELT.',
      date: '2026',
      media: {
        src: 'assets/images/Foto principal del Producto_.jpg',
        label: 'Evidencia fotográfica'
      },
      link: 'assets/images/Foto principal del Producto_.jpg'
    },

    {
      type: 'Documento',
      description:
        'Material documental relacionado con el desarrollo del proyecto NUTRIVELT.',
      date: '2026',
      media: {
        src: 'assets/images/Logotipo del proyecto.jpg',
        label: 'Documento del proyecto'
      },
      link: 'assets/images/Logotipo del proyecto.jpg'
    },

    {
      type: 'Encuesta',
      description:
        'Registro de las respuestas utilizadas para conocer la percepción inicial del producto.',
      date: '2026',
      media: {
        src: 'assets/images/Foto de resultado de obsevación.jpg',
        label: 'Resultados de encuesta y observación'
      },
      link: 'assets/images/Foto de resultado de obsevación.jpg'
    },

    {
      type: 'Registro',
      description:
        'Registro visual del proceso de elaboración y evolución del producto.',
      date: '2026',
      media: {
        src: 'assets/images/Preparación.jpg',
        label: 'Registro de producción'
      },
      link: 'assets/images/Preparación.jpg'
    },

    {
      type: 'Constancia',
      description:
        'Evidencia visual asociada a la participación y desarrollo del proyecto.',
      date: '2026',
      media: {
        src: 'assets/images/Logotipo del proyecto.jpg',
        label: 'Evidencia del proyecto'
      },
      link: 'assets/images/Logotipo del proyecto.jpg'
    }
  ],


  annexes: [

    {
      title: 'Facturas de compras',
      link: 'assets/images/Foto de los ingredientes_.jpg'
    },

    {
      title: 'Registros de ventas',
      link: 'assets/images/productofoto.jpeg'
    },

    {
      title: 'Constancias de participación',
      link: 'assets/images/Logotipo del proyecto.jpg'
    },

    {
      title: 'Documentos adicionales',
      link: 'assets/images/mapaempatia.png'
    }
  ],


  team: [

    {
      name: 'Jhonatan Bringas Vasquez',
      role: 'Integrante del equipo Clúster Élan',
      description:
        'Responsable de participar en el desarrollo, prototipado, validación y presentación del proyecto NUTRIVELT.',
      media: {
        src: 'assets/images/Logotipo del proyecto.jpg',
        label: 'Integrante del equipo'
      }
    }
  ]

};
