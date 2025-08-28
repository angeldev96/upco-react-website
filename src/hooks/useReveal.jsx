import { useEffect, useRef } from 'react'

export default function useReveal(options) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, options || { threshold: 0.12 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return ref
}
