import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import useReveal from '../hooks/useReveal'
import { THUMBS } from '../data/galleryImages'

export default function Hero() {
  const { lang } = useContext(LanguageContext)
  const ref = useReveal()
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setBgIndex((i) => (i + 1) % THUMBS.length), 5000)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden">
        {/* Background carousel using THUMBS */}
        {THUMBS.map((t, i) => (
          <img
            key={i}
            src={t.src || t.fallback}
            alt={t.alt}
            onError={(e) => { e.currentTarget.src = t.fallback }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${i === bgIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: i === bgIndex ? 0 : -1 }}
          />
        ))}

  <div className="absolute inset-0 bg-black/30" />

        <div ref={ref} className="relative z-10 flex items-center justify-center h-full px-6 text-center reveal">
          <div className="max-w-4xl">
            <h1 className="text-white uppercase font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
              {lang === 'es' ? (
                <>
                  ILUMINANDO EL PRESENTE Y
                  <br />
                  FUTURO DE LA ISLA
                </>
              ) : (
                <>
                  ILLUMINATING THE PRESENT AND
                  <br />
                  FUTURE OF THE ISLAND
                </>
              )}
            </h1>

            <div className="mt-8">
              <a
                href="#services"
                className="inline-block bg-[#4fd23f] text-black font-semibold px-6 py-3 rounded shadow hover:bg-[#45c235] transition-colors duration-200 stagger-child"
                style={{ transitionDelay: '200ms' }}
              >
                {lang === 'es' ? 'Descubra mas' : 'Discover more'}
              </a>
            </div>
          </div>
        </div>

        {/* Decorative corner lines */}
        <div className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-white/90" />
        <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-white/90" />
        <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-white/90" />
        <div className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-white/90" />
      </div>
    </section>
  )
}
