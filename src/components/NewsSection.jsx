import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import useReveal from '../hooks/useReveal'

// Sample posts array - replace with real data or CMS later
const POSTS = [
  {
    id: 1,
    title: 'UPCO completa instalación de nueva planta solar',
    excerpt: 'Hemos finalizado la instalación de la nueva planta solar para mejorar la capacidad de la isla y reducir emisiones.',
    date: 'Ago 20, 2025',
    image: '/news1.jpg',
    fallback: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function NewsSection() {
  const { lang } = useContext(LanguageContext)
  const ref = useReveal()

  return (
    <section ref={ref} className="py-16 bg-white reveal" aria-labelledby="news-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 id="news-heading" className="text-2xl md:text-3xl font-bold">{lang === 'es' ? 'Noticias y Actualizaciones UPCO' : 'UPCO News & Updates'}</h2>
          <p className="text-sm text-gray-500 mt-2">{lang === 'es' ? 'Entérate de los últimos avances, proyectos y noticias de UPCO.' : 'Get the latest UPCO progress, projects and news.'}</p>
        </div>

        {POSTS.length === 0 ? (
          <p className="text-center text-gray-400">{lang === 'es' ? 'No se encontraron entradas' : 'No posts found'}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <article key={p.id} className="border rounded shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img src={p.image} alt={p.title} onError={(e)=>{ e.currentTarget.src = p.fallback }} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{p.date}</div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{p.excerpt}</p>
                  <a className="inline-block bg-[#4fd23f] text-black font-semibold px-4 py-2 rounded hover:bg-[#45c235] transition-colors" href="#">{lang === 'es' ? 'Leer mas' : 'Read more'}</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
