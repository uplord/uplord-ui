// --- HEX → RGB ---
function hexToRgb(hex: string) {
  let clean = hex.replace('#', '')
  if (clean.length === 3) {
    clean = clean
      .split('')
      .map((c) => c + c)
      .join('')
  }

  const r = parseInt(clean.slice(0, 2), 16)
  const g = parseInt(clean.slice(2, 4), 16)
  const b = parseInt(clean.slice(4, 6), 16)

  return { r, g, b }
}

// --- sRGB → linear ---
function srgbToLinear(v: number) {
  const c = v / 255
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

// --- RGB → OKLCH ---
export function hexToOklch(hex: string) {
  const { r, g, b } = hexToRgb(hex)

  const lr = srgbToLinear(r)
  const lg = srgbToLinear(g)
  const lb = srgbToLinear(b)

  // Convert to OKLab
  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb

  const l_ = Math.cbrt(l)
  const m_ = Math.cbrt(m)
  const s_ = Math.cbrt(s)

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_
  const b2 = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_

  const C = Math.sqrt(a * a + b2 * b2)
  const h = (Math.atan2(b2, a) * 180) / Math.PI

  return {
    l: +(L * 100).toFixed(2),
    c: +C.toFixed(4),
    h: +(h < 0 ? h + 360 : h).toFixed(2),
  }
}

export function getHoverOklch(hex: string, delta = 0.1) {
  const { l, c, h } = hexToOklch(hex)

  const newL = l < 40 ? Math.min(100, l + delta * 100) : Math.max(0, l - delta * 100)

  return `oklch(${newL}% ${c} ${h})`
}

export function getContrastOklch(hex: string) {
  const { l } = hexToOklch(hex)
  return l > 60 ? 'var(--black)' : 'var(--white)'
}
