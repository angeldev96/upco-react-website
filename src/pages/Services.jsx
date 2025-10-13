import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Services() {
  const { lang } = useContext(LanguageContext)

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">{lang === 'es' ? 'Servicios' : 'Services'}</h2>
        <ul className="list-disc pl-5">
          <li>{lang === 'es' ? 'Diseño e instalación de sistemas fotovoltaicos' : 'PV system design & installation'}</li>
          <li>{lang === 'es' ? 'Almacenamiento con baterías e integración' : 'Battery storage & integration'}</li>
          <li>{lang === 'es' ? 'Mantenimiento y monitoreo de sistemas' : 'System maintenance and monitoring'}</li>
        </ul>
      </div>
    </main>
  )
}
