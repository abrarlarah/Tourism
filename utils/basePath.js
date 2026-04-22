// utils/basePath.js
// Prefixes image paths with basePath for GitHub Pages deployment
// Next.js basePath does NOT auto-prefix <Image src> when images.unoptimized is true
const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function img(src) {
  if (!src || src.startsWith('http') || src.startsWith(bp)) return src;
  return `${bp}${src}`;
}

export default bp;
