const paths = {
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  down: <><path d="m6 9 6 6 6-6" /></>,
  leaf: <><path d="M20 4C10 4 4 9 4 17c0 2 1 3 3 3 8 0 13-6 13-16Z" /><path d="M4 20c3-5 7-8 12-11" /></>,
  pumpkin: <><path d="M7 10c-2 1-3 4-3 6 0 3 3 5 8 5s8-2 8-5c0-2-1-5-3-6" /><path d="M8 8c1-2 2-3 4-3s3 1 4 3M12 5V2m0 3 2-2" /><path d="M8 10c-1 3-1 7 0 10m4-11v12m4-11c1 3 1 7 0 10" /></>,
  sparkle: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  grain: <><path d="M8 20c-2-5-2-10 1-15 3 4 3 9-1 15ZM16 20c2-5 2-10-1-15-3 4-3 9 1 15Z" /><path d="M12 21V3" /></>,
  egg: <><path d="M12 3c-2 3-6 7-6 11a6 6 0 0 0 12 0c0-4-4-8-6-11Z" /></>,
  cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
  heart: <><path d="M20.8 8.6c0 6-8.8 11.4-8.8 11.4S3.2 14.6 3.2 8.6C3.2 6 5.2 4 7.7 4c1.5 0 3 .7 4.3 2.3C13.3 4.7 14.8 4 16.3 4c2.5 0 4.5 2 4.5 4.6Z" /></>,
  coin: <><circle cx="12" cy="12" r="8" /><path d="M14.5 9.5c-.4-.8-1.3-1.2-2.5-1.2-1.4 0-2.4.7-2.4 1.8 0 2.7 4.8 1.2 4.8 4 0 1.1-1 1.8-2.5 1.8-1.3 0-2.3-.5-2.8-1.4M12 7v10" /></>,
  oven: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M7 7h.01M10 7h.01M7 11h10v7H7z" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m3 9v-2a6 6 0 0 0-3-5.2" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m17 7 4-4M17 7h4v4" /></>,
  play: <><path d="m9 7 7 5-7 5V7Z" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m21 16-5-5L5 20" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  cart: <><path d="M4 5h2l2 10h9l2-7H7" /><circle cx="10" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></>,
  phone: <><path d="M6 3h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2v3c0 1.7-1.3 3-3 3C9.7 21 3 14.3 3 6c0-1.7 1.3-3 3-3Z" /></>,
  quote: <><path d="M7 17H4l1-5h4v5H7Zm9 0h-3l1-5h4v5h-2Z" /></>,
  up: <><path d="m6 14 6-6 6 6" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></>,
}

export default function Icon({ name, size = 20, stroke = 1.8, className = '' }) {
  return <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.sparkle}</svg>
}
