// Eventos Tati's · datos del cliente
// Real (perfil de Instagram @eventostatis, 28/09/2026): nombre, bio, Sevilla, enlace de WhatsApp,
// servicios (cumpleaños, comuniones, bodas, Spa Tati's, monitores, talleres), maestra de Infantil.
// PENDIENTE de confirmar con la clienta: dominio, email, número de WhatsApp y testimonios (inventados).

export const siteConfig = {
  name: "Eventos Tati's",
  planner: 'Tati',
  domain: 'eventostatis.com', // PENDIENTE: dominio provisional
  email: 'hola@eventostatis.com', // PENDIENTE: email provisional
  whatsapp: '34600000000', // PENDIENTE: número; de momento se usa waMessageLink (real)
  waMessageLink: 'https://wa.me/message/ZUUWDKYBZY65E1', // enlace real de la bio de Instagram
  instagram: '@eventostatis',
  locations: ['Sevilla', 'Aljarafe', 'Dos Hermanas', 'Mairena del Aljarafe', 'Alcalá de Guadaíra', 'Provincia de Sevilla'],
  tagline: 'Eventos con estilo único para cada celebración que importa',
  bio:
    "Soy Tati, maestra de Infantil. Durante años aprendí en el aula cómo se sienten los peques: qué les emociona, qué les agobia y cuánto dura de verdad su atención. Esa mirada es la base de Eventos Tati's. Diseñamos cumpleaños, comuniones, bodas y celebraciones en Sevilla con una estética cuidada y un equipo de monitoras que sabe tratar con niños, para que ellos disfruten y tú también.",
  bioShort:
    'Decoración, animación y organización de eventos en Sevilla con la mirada de una maestra de Infantil. Tú disfrutas del día, nosotras nos encargamos del resto.',
  quote: 'Donde hay dedicación, nacen grandes resultados.',
}

export const services: Array<{
  title: string
  slug: string
  kicker: string
  description: string
  longDescription: string
  includes: string[]
  image: string
}> = [
  {
    title: 'Cumpleaños temáticos',
    slug: 'cumpleanos',
    kicker: 'Su día, su mundo',
    description: 'Decoración temática, mesa dulce y animación pensada para la edad exacta de tu peque.',
    longDescription:
      'Empezamos por lo que le gusta a tu peque, un personaje, un color, un animal, y construimos todo alrededor: photocall, arco de globos, mesa dulce, cartelería con su nombre y actividades adaptadas a su edad. Llegamos antes, montamos y recogemos. Tú solo tienes que abrir la puerta a los invitados.',
    includes: ['Photocall y arco de globos temático', 'Mesa dulce y cartelería personalizada', 'Animación adaptada a la edad', 'Montaje y recogida incluidos'],
    image: '/photos/granja-zenon-molino-globos.webp',
  },
  {
    title: 'Comuniones',
    slug: 'comuniones',
    kicker: 'Tú disfruta del día',
    description: 'Decoración, servicios exclusivos y coordinación de monitores para que la comunión fluya sola.',
    longDescription:
      'Los tres servicios que no pueden faltar en una comunión, en un solo equipo: decoración y ambientación (mesa dulce, mesas, globos, flores y photocall), servicios exclusivos como fotomatón, mini feria o glitter bar, y la coordinación de monitores, que distribuyen las actividades y supervisan a los niños durante toda la celebración.',
    includes: ['Mesa dulce, flores y photocall', 'Fotomatón, mini feria y glitter bar', 'Talleres con nombre para cada niño', 'Monitores coordinados de principio a fin'],
    image: '/photos/comunion-mesa-dulce-futbol.webp',
  },
  {
    title: "Spa Tati's",
    slug: 'spa-tatis',
    kicker: 'Un rincón solo para ellos',
    description: 'Un spa completo para peques: albornoces, antifaces, mascarillas y música suave.',
    longDescription:
      "Montamos un rincón spa completo para que cada peque se sienta en un lugar solo para ellos: mesa baja con cuencos y toallitas, albornoces y diademas, mascarillas, manicura, antifaces y unos minutos de relax con música suave. Es el cumpleaños que ellos mismos piden repetir.",
    includes: ['Albornoz y diadema para cada peque', 'Mascarilla, manicura y maquillaje suave', 'Momento relax con antifaz y música', 'Decoración en tonos crema y rosa'],
    image: '/photos/spa-rincon-mesa.webp',
  },
  {
    title: 'Animación y monitores',
    slug: 'animacion',
    kicker: 'Mirada de maestra',
    description: 'Monitoras con experiencia en Infantil, juegos gigantes, pintacaras y talleres.',
    longDescription:
      'Nuestras monitoras saben tratar con niños porque vienen del mundo educativo. Organizamos el equipo, repartimos las actividades por edades y vigilamos que todos estén entretenidos y seguros: paracaídas, juegos gigantes, pintacaras con diseños muy coloridos, talleres y bailes.',
    includes: ['Monitoras con formación en Infantil', 'Paracaídas y juegos gigantes', 'Pintacaras y glitter', 'Talleres creativos por edades'],
    image: '/photos/paracaidas-juego.webp',
  },
  {
    title: 'Bodas y eventos',
    slug: 'bodas',
    kicker: 'También para mayores',
    description: 'Candy bar, rincones decorados y zona infantil para que la fiesta sea de todos.',
    longDescription:
      'En bodas y celebraciones de adultos creamos rincones que se convierten en el punto de encuentro: candy bar minimalista con arcos y velas, mesas de postres, cartelería con vuestros nombres y, si hay niños, una zona infantil con monitoras para que los padres también bailen.',
    includes: ['Candy bar con arcos y velas', 'Cartelería con vuestros nombres', 'Zona infantil con monitoras', 'Montaje nocturno sin prisas'],
    image: '/photos/boda-candy-bar-arcos.webp',
  },
  {
    title: 'Decoración y globos',
    slug: 'decoracion',
    kicker: 'El primer impacto',
    description: 'Arcos orgánicos, photocalls y ambientación para bautizos, revelaciones y aniversarios.',
    longDescription:
      'Diseñamos la decoración como si fuera un escenario: arcos orgánicos de globos en la paleta que elijas, paneles, telas, flores y detalles de cartelería. Perfecto para bautizos, revelaciones de sexo, aniversarios o cualquier fecha que merezca un rincón bonito.',
    includes: ['Arcos orgánicos de globos', 'Paneles y photocall', 'Flores y textiles', 'Cartelería personalizada'],
    image: '/photos/globos-rosa-oro-arco.webp',
  },
]

// Guía por edades (inspirada en su post "¿Sabes qué contratar según la edad de tu peque?")
export const ageGuide: Array<{ range: string; title: string; text: string; picks: string[] }> = [
  {
    range: '0 a 3',
    title: 'Corto, sensorial y sin esperas',
    text: 'A esta edad todo tiene que ser breve y tranquilo. Menos estímulos y más juego libre.',
    picks: ['Zona sensorial', 'Pintacaras suave', 'Burbujas y música'],
  },
  {
    range: '4 a 6',
    title: 'Juegos clásicos y ganas de bailar',
    text: 'Quieren premios, carreras y bailar sin parar. Aquí manda la animación.',
    picks: ['Juegos gigantes', 'Talleres', 'Bailes y premios'],
  },
  {
    range: '7 a 9',
    title: 'Dinámicos y con su toque',
    text: 'Ya eligen tema y quieren sentir que la fiesta es suya.',
    picks: ["Spa Tati's", 'Glitter bar', 'Gymkana temática'],
  },
  {
    range: '10 a 12+',
    title: 'Acción y sentirse mayores',
    text: 'Nada de juegos de peques: competición, retos y algo que puedan contar el lunes.',
    picks: ['Fortnite en vivo', 'Mini feria', 'Fotomatón'],
  },
]

export const processSteps: Array<{ number: number; title: string; description: string }> = [
  {
    number: 1,
    title: 'Nos escribes',
    description: 'Por WhatsApp o formulario. Nos cuentas la fecha, la edad del peque o el tipo de evento y cuántos invitados esperas.',
  },
  {
    number: 2,
    title: 'Propuesta a tu medida',
    description: 'Te preparamos una propuesta según la edad, el espacio y tu presupuesto. Nos adaptamos, no hay paquetes rígidos.',
  },
  {
    number: 3,
    title: 'Montamos antes de que llegues',
    description: 'Cargamos la furgoneta, llegamos con tiempo y dejamos cada rincón listo: globos, mesa, photocall y actividades.',
  },
  {
    number: 4,
    title: 'Tú disfrutas',
    description: 'Las monitoras llevan el ritmo de la fiesta y al terminar lo recogemos todo. Tú solo guardas los recuerdos.',
  },
]

export const testimonials: Array<{ name: string; date: string; location: string; service: string; text: string }> = [
  {
    name: 'Lucía Romero',
    date: 'Septiembre 2026',
    location: 'Mairena del Aljarafe',
    service: "Spa Tati's",
    text: 'Mi hija cumplía 8 y quería algo "de mayores". El Spa fue un acierto total: albornoces, mascarillas y el ratito con antifaz y música. Las niñas salieron diciendo que era el mejor cumpleaños que habían tenido.',
  },
  {
    name: 'Carmen y Javier',
    date: 'Mayo 2026',
    location: 'Sevilla',
    service: 'Comunión',
    text: 'Contratamos decoración, fotomatón y monitores para la comunión de Hugo. La mesa dulce de fútbol era preciosa y las monitoras tenían a 25 niños entretenidos toda la tarde. Por primera vez en un evento familiar pude sentarme a comer.',
  },
  {
    name: 'Elena y Rubén',
    date: 'Agosto 2026',
    location: 'Hacienda en el Aljarafe',
    service: 'Boda',
    text: 'Tati nos montó un candy bar blanco con arcos y velas que se convirtió en el rincón favorito de la noche. Cuidaron hasta el último detalle y lo dejaron todo recogido sin que nos enterásemos.',
  },
  {
    name: 'Rocío Márquez',
    date: 'Julio 2026',
    location: 'Dos Hermanas',
    service: 'Cumpleaños temático',
    text: 'Primer cumpleaños de mi hija con la temática de La Granja de Zenón. Llegaron por la mañana con la furgoneta y en unas horas el salón era otro. Se nota que Tati ha sido maestra, sabe exactamente qué funciona con los peques.',
  },
]

export const faqs: Array<{ q: string; a: string }> = [
  {
    q: '¿En qué zonas trabajáis?',
    a: 'En Sevilla capital y toda la provincia: Aljarafe, Dos Hermanas, Alcalá de Guadaíra y alrededores. Para otras zonas de Andalucía, pregúntanos.',
  },
  {
    q: '¿Con cuánta antelación tengo que reservar?',
    a: 'Para cumpleaños, con dos o tres semanas suele bastar. Para comuniones y bodas recomendamos reservar con varios meses, porque mayo y junio se llenan pronto.',
  },
  {
    q: '¿Os adaptáis a mi presupuesto?',
    a: 'Sí. Preparamos cada propuesta a medida y te decimos qué merece la pena según la edad de tu peque y lo que quieres conseguir.',
  },
  {
    q: '¿El montaje y la recogida están incluidos?',
    a: 'Siempre. Llegamos con tiempo para montar y al terminar lo recogemos todo.',
  },
  {
    q: '¿Venís a casa o solo a salones?',
    a: 'Vamos donde celebres: casa, jardín, finca, salón de eventos o restaurante.',
  },
]

export const photos: Array<{ src: string; alt: string; featured: boolean; orientation: 'landscape' | 'portrait' }> = [
  { src: '/photos/globos-crema-equipo-brazos.webp', alt: 'Tati y su compañera celebrando entre globos color crema en el estudio', featured: true, orientation: 'portrait' },
  { src: '/photos/granja-zenon-molino-globos.webp', alt: 'Decoración de La Granja de Zenón con molino, globos pastel y tractor rosa para un primer cumpleaños', featured: true, orientation: 'portrait' },
  { src: '/photos/boda-candy-bar-arcos.webp', alt: 'Candy bar blanco con arcos, velas y tarros de chuches en una boda nocturna', featured: true, orientation: 'portrait' },
  { src: '/photos/spa-rincon-mesa.webp', alt: "Rincón del Spa Tati's con mesa baja, cuencos, toallas y albornoces blancos", featured: true, orientation: 'portrait' },
  { src: '/photos/comunion-mesa-dulce-futbol.webp', alt: 'Mesa dulce de comunión con temática de fútbol sobre mantel de cuadros negros', featured: false, orientation: 'portrait' },
  { src: '/photos/comunion-gingham-picnic.webp', alt: 'Rincón Gingham Picnic con banderines de cuadros, flores y sombrero para una comunión', featured: false, orientation: 'portrait' },
  { src: '/photos/globos-rosa-oro-arco.webp', alt: 'Arco orgánico de globos rosa empolvado, perlados y dorados junto a un panel blanco', featured: false, orientation: 'portrait' },
  { src: '/photos/pintacaras-neon.webp', alt: 'Niña con pintacaras de colores neón en una fiesta al atardecer', featured: false, orientation: 'portrait' },
  { src: '/photos/paracaidas-juego.webp', alt: 'Monitora jugando al paracaídas de colores con los niños sobre césped', featured: false, orientation: 'portrait' },
  { src: '/photos/taller-comunion-bolsas.webp', alt: 'Niñas de comunión decorando bolsas de tela con su nombre en un taller', featured: false, orientation: 'portrait' },
  { src: '/photos/piscina-cuatro-en-raya.webp', alt: 'Cuatro en raya gigante junto a la piscina en una fiesta de verano', featured: false, orientation: 'portrait' },
  { src: '/photos/boda-arco-paula-cristian.webp', alt: 'Invitado sirviéndose en el candy bar junto al arco con los nombres de los novios', featured: false, orientation: 'portrait' },
  { src: '/photos/boda-mesa-postres-flores.webp', alt: 'Mesa de postres bajo techo de flores secas y bombillas colgantes', featured: false, orientation: 'portrait' },
  { src: '/photos/granja-zenon-photocall.webp', alt: 'Photocall de granja con granero rosa, globos y cartel personalizado', featured: false, orientation: 'portrait' },
  { src: '/photos/spa-relax-antifaces.webp', alt: 'Niñas con albornoz y antifaz en el momento relax del spa', featured: false, orientation: 'landscape' },
  { src: '/photos/comunion-selfie-ninos.webp', alt: 'Monitora haciéndose un selfie con niños maquillados en un jardín', featured: false, orientation: 'landscape' },
  { src: '/photos/comunion-monitora-bebe.webp', alt: 'Monitora jugando con un bebé sobre un paracaídas de colores', featured: false, orientation: 'portrait' },
  { src: '/photos/boda-invitados-candy.webp', alt: 'Invitados de boda eligiendo chuches en el candy bar iluminado con velas', featured: false, orientation: 'portrait' },
  { src: '/photos/granja-hinchando-globos.webp', alt: 'Equipo de Eventos Tatis hinchando globos pastel antes de montar', featured: false, orientation: 'portrait' },
  { src: '/photos/granja-montaje-equipo.webp', alt: 'Dos monitoras preparando un globo lila durante el montaje', featured: false, orientation: 'portrait' },
  { src: '/photos/boda-candy-bar-montaje.webp', alt: 'Tati rellenando el candy bar de una boda con bolsas de chuches', featured: false, orientation: 'portrait' },
  { src: '/photos/globos-crema-abrazo.webp', alt: 'Tati y su compañera abrazadas con globos gigantes color crema', featured: false, orientation: 'portrait' },
  { src: '/photos/globos-crema-tati-taburete.webp', alt: 'Tati lanzando un globo gigante junto a una guirnalda de globos crema', featured: false, orientation: 'portrait' },
  { src: '/photos/sesion-suelo-risas.webp', alt: 'Tati y su compañera riendo tumbadas sobre una manta en el estudio', featured: false, orientation: 'portrait' },
  { src: '/photos/tati-retrato-puf.webp', alt: 'Retrato de Tati sentada en un puf blanco con cortinas de lino', featured: false, orientation: 'portrait' },
  { src: '/photos/tati-estudio-gingham.webp', alt: 'Tati en su estudio rodeada de manteles de cuadros vichy', featured: false, orientation: 'portrait' },
  { src: '/photos/tati-oficina.webp', alt: 'Tati en su oficina preparando propuestas de eventos', featured: false, orientation: 'portrait' },
]

export const portfolio = photos.filter((p) =>
  [
    'granja-zenon-molino-globos', 'boda-candy-bar-arcos', 'spa-rincon-mesa', 'comunion-mesa-dulce-futbol',
    'comunion-gingham-picnic', 'globos-rosa-oro-arco', 'pintacaras-neon', 'paracaidas-juego', 'taller-comunion-bolsas',
    'piscina-cuatro-en-raya', 'boda-arco-paula-cristian', 'boda-mesa-postres-flores', 'granja-zenon-photocall',
    'spa-relax-antifaces', 'comunion-selfie-ninos', 'comunion-monitora-bebe', 'boda-invitados-candy', 'granja-hinchando-globos',
  ].some((k) => p.src.includes(k)),
)

export const photo = (key: string) => {
  const p = photos.find((x) => x.src.includes(key))
  if (!p) throw new Error(`Foto no encontrada: ${key}`)
  return p
}
