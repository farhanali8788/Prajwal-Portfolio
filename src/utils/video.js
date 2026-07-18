// Turns whatever gets pasted into `content.js` as a `video` field into
// something we know how to play.
//
//   - A Google Drive share link (any of the common formats Drive gives you
//     when you hit "Copy link") is detected and rewritten into Drive's
//     embeddable preview URL, which plays inside an <iframe>.
//   - Anything else (a local file like "/showreel.mp4", or a direct CDN /
//     mp4 URL) is treated as a normal playable file for a native <video> tag.
//
// This means you can paste the exact link Google Drive gives you — no
// manual editing required.

const DRIVE_PATTERNS = [
  /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/, // .../file/d/<ID>/view?usp=sharing
  /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/, // .../open?id=<ID>
  /drive\.google\.com\/.*[?&]id=([a-zA-Z0-9_-]+)/, // .../uc?id=<ID> and similar
]

export function resolveVideo(url) {
  if (!url) return null

  for (const pattern of DRIVE_PATTERNS) {
    const match = url.match(pattern)
    if (match) {
      return { kind: 'drive', src: `https://drive.google.com/file/d/${match[1]}/preview` }
    }
  }

  return { kind: 'file', src: url }
}
