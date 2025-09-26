import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Oficinas() {
  const { lang } = useContext(LanguageContext)

  useEffect(() => {
    document.title = lang === 'es' ? 'Oficinas — UPCO' : 'Offices — UPCO'
  }, [lang])

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">{lang === 'es' ? 'Oficinas y Centros Operativos' : 'Offices & Operational Bases'}</h1>

        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">{lang === 'es' ? 'Atención Comercial' : 'Customer Service'}</h2>
          <p className="text-gray-700 mb-4">
            {lang === 'es'
              ? 'UPCO cuenta con dos oficinas de atención al cliente. A continuación encontrarás la dirección, horarios y el enlace a la ubicación en Google Maps.'
              : 'UPCO has two customer service offices. Below you will find the address, opening hours and a link to each location in Google Maps.'}
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">{lang === 'es' ? 'Oficina Principal — Barrio Hollands' : 'Main Office — Hollands'}</h3>
              <p className="text-gray-600">{lang === 'es' ? 'Ubicación: Calle principal de Útila, contiguo al Banco Atlántida.' : 'Location: Main street of Utila, next to Banco Atlántida.'}</p>
              <p className="text-gray-600">{lang === 'es' ? 'Horario: 7:00 am – 7:00 pm (todos los días). Excepción: 25 de diciembre y 1 de enero: 8:00 am – 5:00 pm.' : 'Hours: 7:00am – 7:00pm daily. Exception: Dec 25 & Jan 1: 8:00am – 5:00pm.'}</p>
              <p className="mt-2"><a href="https://maps.app.goo.gl/QkaBZFGJ9JNH4vyPA" target="_blank" rel="noreferrer" className="text-[#4fd23f] font-semibold">{lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}</a></p>
            </div>

            <div>
              <h3 className="font-semibold">{lang === 'es' ? 'Oficina Los Cayitos' : 'Los Cayitos Office'}</h3>
              <p className="text-gray-600">{lang === 'es' ? 'Horario: Lunes a sábado: 8:30 am – 10:30 am y 4:00 pm – 6:00 pm. Acceso solo por lancha.' : 'Hours: Monday to Saturday: 8:30am – 10:30am & 4:00pm – 6:00pm. Boat access only.'}</p>
              <p className="mt-2"><a href="https://maps.app.goo.gl/oGHDAfgoRd2SH8qH8" target="_blank" rel="noreferrer" className="text-[#4fd23f] font-semibold">{lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}</a></p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">{lang === 'es' ? 'Contacto rápido' : 'Quick contact'}</h2>
          <p className="text-gray-700">{lang === 'es' ? 'Para consultas rápidas escríbenos por WhatsApp o llamanos.' : 'For quick inquiries, message us on WhatsApp or call us.'}</p>
          <div className="mt-4">
            <a href="https://wa.me/50488281644" className="inline-block bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">WhatsApp</a>
          </div>
        </section>
      </div>
    </main>
  )
}
