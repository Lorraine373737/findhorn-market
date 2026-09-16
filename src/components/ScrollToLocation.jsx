import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToLocation() {
  const location = useLocation()

  useEffect(() => {
    // HashRouter owns the URL hash; section anchors live in the route's hash.
    // Run once after the destination page renders, never on manual scrolling.
    const frame = requestAnimationFrame(() => {
      const target = location.hash && document.getElementById(location.hash.slice(1))

      if (target) {
        target.scrollIntoView({ block: 'start' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [location])

  return null
}
