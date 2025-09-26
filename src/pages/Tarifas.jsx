import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Tarifas() {
  const { lang } = useContext(LanguageContext)

  useEffect(() => {
    const title = lang === 'es' ? 'Tarifas — UPCO' : 'Rates — UPCO'
    document.title = title

    const desc =
      lang === 'es'
        ? 'Resumen de tarifas de UPCO. Precios en Lempiras por kWh.'
        : 'Summary of UPCO rates. Prices in Lempiras per kWh.'

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = desc
  }, [lang])

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">{lang === 'es' ? 'Tarifas' : 'Rates'}</h1>

        <p className="mb-4 text-gray-700">
          {lang === 'es'
            ? 'Aquí un resumen de las tarifas actuales de UPCO. Los precios están en Lempiras por kWh y pueden variar según temporada.'
            : 'Here is a summary of UPCO current rates. Prices are in Lempiras per kWh and may vary by season.'}
        </p>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">{lang === 'es' ? 'Tarifa actual' : 'Current rate'}</h2>
          <div className="text-2xl font-bold mb-4">L. 11.20 {lang === 'es' ? '/ kWh' : '/ kWh'}</div>

          <h3 className="font-semibold mb-2">{lang === 'es' ? 'Resumen de períodos' : 'Summary of periods'}</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{lang === 'es' ? '1 Junio 2023 – Actualidad: L. 11.20' : '1 June 2023 – Present: L. 11.20'}</li>
            <li>{lang === 'es' ? '1 Abril 2023 – 31 Mayo 2023: L. 12.20' : '1 Apr 2023 – 31 May 2023: L. 12.20'}</li>
            <li>{lang === 'es' ? '1 Enero 2023 – 31 Marzo 2023: L. 13.00' : '1 Jan 2023 – 31 Mar 2023: L. 13.00'}</li>
            <li>{lang === 'es' ? 'Tarifas sujetas a cambios según costos de combustible y operación.' : 'Rates subject to change depending on fuel and operating costs.'}</li>
          </ul>

          <div className="mt-6">
            <a href="/contact" className="inline-block bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">
              {lang === 'es' ? 'Contactar para más información' : 'Contact for more information'}
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
