import React, { useState } from 'react'

const THUMBS = [
  { src: '/gallery1.jpg', alt: 'Proyecto 1', fallback: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop' },
  { src: '/gallery2.jpg', alt: 'Proyecto 2', fallback: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { src: '/gallery3.jpg', alt: 'Proyecto 3', fallback: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop' },
]

export default function ProjectsGallery() {
  const [index, setIndex] = useState(0)

  function prev() { setIndex((i) => (i - 1 + THUMBS.length) % THUMBS.length) }
  function next() { setIndex((i) => (i + 1) % THUMBS.length) }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Impulsando el Desarrollo Sostenible de Utila</h2>
            <p className="text-gray-600 mb-6">UPCO no solo provee energía, sino que también impulsa el crecimiento sostenible de Utila. Invertimos en un futuro energético mejor para nuestra comunidad.</p>

            <a className="inline-block bg-[#4fd23f] text-black font-semibold px-5 py-3 rounded shadow hover:bg-[#45c235] transition-colors" href="#projects">See All Projects</a>

            <div className="mt-8 flex gap-4 items-center">
              <div className="flex gap-3">
                {THUMBS.map((t, i) => (
                  <button key={i} onClick={() => setIndex(i)} className={`w-24 h-16 overflow-hidden rounded shadow ${i===index? 'ring-2 ring-[#4fd23f]': ''}`}>
                    <img src={t.src} alt={t.alt} onError={(e)=>{ e.currentTarget.src = t.fallback }} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="ml-4 text-sm text-gray-500">
                <button onClick={prev} className="mr-4">↞ PREV</button>
                <button onClick={next}>NEXT ↠</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-xl shadow-lg">
              <img src={THUMBS[index].src} alt={THUMBS[index].alt} onError={(e)=>{ e.currentTarget.src = THUMBS[index].fallback }} className="w-full h-80 object-cover rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
