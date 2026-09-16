// Match the existing header's 24px outline icons without adding a dependency.
const paths = {
  play: <path d="m8 5 11 7-11 7Z" />,
  pause: <><path d="M8 5v14M16 5v14" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  leaf: <><path d="M20 4C10 2 3 6 4 14c1 7 11 8 14 1 2-4 2-8 2-11Z" /><path d="m3 21 12-12M8 16v-5m0 5h5" /></>,
  community: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v3" /></>,
  recycle: <><path d="m8 7 4-5 4 5m-4-5v5M6 9l-4 7 4 1m-4-1 3 5h5m8-12 4 7-4 1m4-1-3 5h-5m3-3-3 3 3 3" /></>,
  bag: <><path d="m6 3-3 4v14h18V7l-3-4ZM3 7h18M8 11a4 4 0 0 0 8 0" /></>,
  arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  up: <><path d="M12 20V4m-6 6 6-6 6 6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
}

export default function Icon({ name, className = '' }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  )
}
