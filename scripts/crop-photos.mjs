// Recorta el "chrome" de capturas de iPhone/Instagram (barras oscuras o claras
// arriba/abajo y a los lados), optimiza a WebP y genera public/og-image.jpg.
// Uso: node scripts/crop-photos.mjs   (fuentes en photos-src/, salida en public/photos/)
//
// Las fuentes de Eventos Tati's son fotos de carrusel y frames de reels (subtítulos ya
// borrados en raw/). Solo se considera "barra" una línea MUY uniforme (std < 6) y continua
// desde el borde, para no comerse paredes blancas ni cielos nocturnos.
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = path.resolve('photos-src')
const OUT = path.resolve('public/photos')
const MAX_W = 1600
const HERO = 'globos-crema-equipo-brazos'

function isBar(data, width, channels, { y, x, len, horizontal }) {
  let sum = 0
  let sumSq = 0
  for (let k = 0; k < len; k++) {
    const px = horizontal ? k : x
    const py = horizontal ? y : k
    const i = (py * width + px) * channels
    const l = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    sum += l
    sumSq += l * l
  }
  const mean = sum / len
  const std = Math.sqrt(Math.max(0, sumSq / len - mean * mean))
  return std < 6 && (mean < 14 || mean > 240)
}

async function detectCrop(file) {
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  const row = (y) => isBar(data, width, channels, { y, len: width, horizontal: true })
  const col = (x) => isBar(data, width, channels, { x, len: height, horizontal: false })
  const vLimit = Math.floor(height * 0.2)
  const hLimit = Math.floor(width * 0.15)
  let top = 0
  while (top < vLimit && row(top)) top++
  let bottom = 0
  while (bottom < vLimit && row(height - 1 - bottom)) bottom++
  let left = 0
  while (left < hLimit && col(left)) left++
  let right = 0
  while (right < hLimit && col(width - 1 - right)) right++
  const clean = (n) => (n < 4 ? 0 : n)
  top = clean(top)
  bottom = clean(bottom)
  left = clean(left)
  right = clean(right)
  return { left, top, width: width - left - right, height: height - top - bottom }
}

async function run() {
  await mkdir(OUT, { recursive: true })
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  for (const f of files) {
    const input = path.join(SRC, f)
    const crop = await detectCrop(input)
    const name = f.replace(/\.[^.]+$/, '')
    const meta = await sharp(input)
      .extract(crop)
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(OUT, `${name}.webp`))
    const src = await sharp(input).metadata()
    const trimmed = crop.width !== src.width || crop.height !== src.height
    console.log(`${trimmed ? 'recortada' : 'ok       '}  ${name}.webp  ${meta.width}x${meta.height}`)
  }

  // OG image 1200x630: foto del hero + velo verde salvia + nombre del estudio
  const heroBuf = await sharp(path.join(SRC, `${HERO}.jpg`)).resize({ width: 1200 }).toBuffer()
  const { height } = await sharp(heroBuf).metadata()
  const top = Math.min(height - 630, Math.round(height * 0.14))
  const svg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#262c20" stop-opacity="0.9"/>
          <stop offset="0.6" stop-color="#262c20" stop-opacity="0.45"/>
          <stop offset="1" stop-color="#262c20" stop-opacity="0.05"/>
        </linearGradient>
        <pattern id="v" width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="12" height="24" fill="#c9d3b8" opacity="0.35"/><rect width="24" height="12" fill="#c9d3b8" opacity="0.35"/>
        </pattern>
      </defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <rect x="0" y="606" width="1200" height="24" fill="url(#v)"/>
      <line x1="80" y1="250" x2="150" y2="250" stroke="#c9d3b8" stroke-width="2"/>
      <text x="80" y="226" font-family="Georgia, serif" font-size="22" letter-spacing="7" fill="#f4efe4">CUMPLEAÑOS · COMUNIONES · BODAS · SEVILLA</text>
      <text x="76" y="370" font-family="Georgia, serif" font-size="112" fill="#ffffff">Eventos</text>
      <text x="80" y="478" font-family="Georgia, serif" font-style="italic" font-size="112" fill="#e6ecd9">Tati's</text>
      <text x="80" y="548" font-family="Georgia, serif" font-size="26" fill="#f4efe4" opacity="0.85">Eventos con estilo único, con la mirada de una maestra de Infantil</text>
    </svg>`)
  await sharp(heroBuf)
    .extract({ left: 0, top, width: 1200, height: 630 })
    .composite([{ input: svg }])
    .jpeg({ quality: 86 })
    .toFile(path.resolve('public/og-image.jpg'))
  console.log('og-image.jpg generada')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
