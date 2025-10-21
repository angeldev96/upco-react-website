import React, { useState, useContext, useEffect, useRef } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import useReveal from '../hooks/useReveal'
import { IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react'
import { THUMBS } from '../data/galleryImages'

// We already use full Cloudinary URLs in `THUMBS`.

export default function ProjectsGallery() {
  const [index, setIndex] = useState(0)
  const { lang } = useContext(LanguageContext)
  const ref = useReveal()
  // autoplay runs continuously
  const autoRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // autoplay always (no pause on hover)
  useEffect(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => setIndex((i) => (i + 1) % THUMBS.length), 4500)
    return () => clearInterval(autoRef.current)
  }, [])

  function handleTouchStart(e) { touchStartX.current = e.touches[0].clientX }
  function handleTouchMove(e) { touchEndX.current = e.touches[0].clientX }
  function handleTouchEnd() {
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) > 50) {
      if (delta > 0) setIndex((i) => (i + 1) % THUMBS.length)
      else setIndex((i) => (i - 1 + THUMBS.length) % THUMBS.length)
    }
  }

  function prev() { setIndex((i) => (i - 1 + THUMBS.length) % THUMBS.length) }
  function next() { setIndex((i) => (i + 1) % THUMBS.length) }
  const [previewOpen, setPreviewOpen] = useState(false)

  // keyboard handlers for modal navigation/close
  useEffect(() => {
    function onKey(e) {
      if (!previewOpen) return
      if (e.key === 'Escape') setPreviewOpen(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [previewOpen])

  return (
  <section ref={ref} className="py-12 reveal" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{lang === 'es' ? 'Impulsando el Desarrollo Sostenible de Utila' : 'Driving Utila\'s Sustainable Development'}</h2>
            <p className="text-gray-600 mb-6">{lang === 'es' ? 'UPCO no solo provee energía, sino que también impulsa el crecimiento sostenible de Utila. Invertimos en un futuro energético mejor para nuestra comunidad.' : 'UPCO not only provides power but also drives Utila\'s sustainable growth. We invest in a better energy future for our community.'}</p>

            <a className="inline-block bg-[#01c100] text-black font-semibold px-5 py-3 rounded shadow hover:bg-[#62ce00] transition-colors" href="#projects">{lang === 'es' ? 'Ver todos los proyectos' : 'See All Projects'}</a>

            <div className="mt-8 flex gap-4 items-center">
              <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
                {THUMBS.map((t, i) => {
                  const thumbSrc = t.src || t.fallback
                  return (
                    <button key={i} onClick={() => setIndex(i)} className={`w-28 md:w-24 h-16 md:h-16 flex-shrink-0 overflow-hidden rounded shadow ${i===index? 'ring-2 ring-[#01c100]': ''}`}>
                      <img src={thumbSrc} alt={lang === 'es' ? t.alt_es : t.alt_en} onError={(e)=>{ e.currentTarget.src = t.fallback }} className="w-full h-full object-cover" />
                    </button>
                  )
                })}
              </div>
              <div className="ml-4 text-sm text-gray-500">
                <button onClick={prev} className="mr-4">↞ {lang === 'es' ? 'ANT' : 'PREV'}</button>
                <button onClick={next}>{lang === 'es' ? 'SIG' : 'NEXT'} ↠</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="w-full lg:max-w-xl shadow-lg relative overflow-hidden rounded"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Sliding track */}
              <div className="carousel-stage h-64 md:h-72 lg:h-80 overflow-hidden">
                <div
                  className="carousel-track flex h-80"
                  style={{
                    width: `${THUMBS.length * 100}%`,
                    transform: `translateX(-${index * (100 / THUMBS.length)}%)`,
                    transition: 'transform 600ms ease',
                  }}
                >
                  {THUMBS.map((t, i) => (
                    <div
                      key={i}
                      className="carousel-slide h-64 md:h-72 lg:h-80"
                      style={{ width: `${100 / THUMBS.length}%`, pointerEvents: i === index ? 'auto' : 'none' }}
                      onClick={() => setPreviewOpen(true)}
                    >
                      <img src={t.src || t.fallback} alt={t.alt} onError={(e) => { e.currentTarget.src = t.fallback }} className="w-full h-full object-cover block" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Left/Right controls */}
              <button
                aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                <IconChevronLeft size={20} stroke={1.6} />
              </button>

              <button
                aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                <IconChevronRight size={20} stroke={1.6} />
              </button>

              {/* Dots */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                {THUMBS.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} aria-label={`Go to ${i + 1}`} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {previewOpen && (
        <div className="gallery-modal" onClick={() => setPreviewOpen(false)}>
            <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setPreviewOpen(false)} aria-label="close">
              <IconX size={28} stroke={1.6} className="text-white bg-black/60 p-2 rounded-full" />
            </button>
            <div className="flex items-center gap-6 justify-center">
              <button onClick={() => { prev() }} aria-label="prev" className="p-2 text-white bg-black/30 rounded-l">
                <IconChevronLeft size={28} stroke={1.6} />
              </button>

              <div style={{ maxWidth: '90vw', maxHeight: '80vh' }}>
                <img src={THUMBS[index].src || THUMBS[index].fallback} alt={lang === 'es' ? THUMBS[index].alt_es : THUMBS[index].alt_en} style={{ maxWidth: '100%', maxHeight: '80vh' }} />
              </div>

              <button onClick={() => { next() }} aria-label="next" className="p-2 text-white bg-black/30 rounded-r">
                <IconChevronRight size={28} stroke={1.6} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
