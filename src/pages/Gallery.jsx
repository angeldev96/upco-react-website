import React, { useState } from 'react'
import { THUMBS } from '../data/galleryImages'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Galería</h1>
          <p className="text-sm text-gray-500 mt-2">Proyectos y trabajos recientes — pulsa una imagen para verla en grande.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {THUMBS.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} className="block w-full overflow-hidden rounded">
              <img src={t.src} alt={t.alt} className="w-full h-48 object-cover transform hover:scale-105 transition-transform" onError={(e)=>{ e.currentTarget.src = t.fallback }} />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-white text-2xl">✕</button>
          <div className="max-w-4xl w-full px-6">
            <img src={THUMBS[active].src} alt={THUMBS[active].alt} className="w-full h-auto rounded shadow-lg" onError={(e)=>{ e.currentTarget.src = THUMBS[active].fallback }} />
          </div>
        </div>
      )}
    </main>
  )
}
