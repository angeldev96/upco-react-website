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

      

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">{lang === 'es' ? 'Tarifa actual' : 'Current rate'}</h2>
          <div className="text-2xl font-bold mb-4">L. 11.20 {lang === 'es' ? '/ kWh' : '/ kWh'}</div>

          <h3 className="font-semibold mb-2">{lang === 'es' ? 'Línea de tiempo de Tarifas' : 'Rates timeline'}</h3>

          <Timeline lang={lang} />

          <p className="mt-4 text-sm text-gray-600">
            {lang === 'es'
              ? 'Nota: Las tarifas no varían por temporadas.'
              : 'Note: Rates do not vary by seasons.'}
          </p>

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

function Timeline({ lang }) {
  const items = [
    { id: 1, title: lang === 'es' ? '1 Junio 2023 – Actualidad' : '1 June 2023 – Present', value: 'L. 11.20' },
    { id: 2, title: lang === 'es' ? '1 Abril 2023 – 31 Mayo 2023' : '1 Apr 2023 – 31 May 2023', value: 'L. 12.20' },
    { id: 3, title: lang === 'es' ? '1 Enero 2023 – 31 Marzo 2023' : '1 Jan 2023 – 31 Mar 2023', value: 'L. 13.00' },
  ]

  const [openId, setOpenId] = React.useState(1)

  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.id} className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className={`w-3 h-3 rounded-full ${openId === it.id ? 'bg-[#4fd23f]' : 'bg-gray-400'}`}></div>
            <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
          </div>

          <div className="flex-1">
            <button onClick={() => setOpenId(it.id)} className="w-full text-left">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{it.title}</div>
                <div className="text-gray-600">{it.value}</div>
              </div>
            </button>

            {openId === it.id && (
              <div className="mt-2 p-3 bg-gray-50 rounded text-gray-700">
                {lang === 'es'
                  ? 'Esta tarifa está vigente en el periodo indicado. Para consultas o aclaraciones contacta nuestro equipo.'
                  : 'This rate is effective for the indicated period. For inquiries or clarifications please contact our team.'}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
