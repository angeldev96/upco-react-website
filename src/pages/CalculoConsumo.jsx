import React, { useState, useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function CalculoConsumo() {
  const { lang } = useContext(LanguageContext)
  const [watts, setWatts] = useState('')
  const [hours, setHours] = useState('')
  const [result, setResult] = useState(null)

  // Tarifa en Lempiras por kWh (constante del requerimiento)
  const TARIFF = 11.20

  // Lista básica de electrodomésticos con potencia aproximada (W) y horas por defecto
  const defaultAppliances = [
    { id: 'bombilla_60', name: lang === 'es' ? 'Bombilla 60 W' : '60 W bulb', watts: 60, hours: 5 },
    { id: 'refrigerador', name: lang === 'es' ? 'Refrigerador' : 'Refrigerator', watts: 500, hours: 24 },
    { id: 'televisor', name: lang === 'es' ? 'Televisor LED 32"' : 'TV LED 32"', watts: 75, hours: 4 },
    { id: 'microondas', name: lang === 'es' ? 'Microondas' : 'Microwave', watts: 1000, hours: 0.5 },
    { id: 'ventilador', name: lang === 'es' ? 'Ventilador' : 'Fan', watts: 60, hours: 8 },
    { id: 'lavadora', name: lang === 'es' ? 'Lavadora' : 'Washing machine', watts: 500, hours: 1 },
    { id: 'plancha', name: lang === 'es' ? 'Plancha' : 'Iron', watts: 1200, hours: 0.5 }
  ]

  // Estado para horas por electrodoméstico (editable por usuario)
  const [applianceHours, setApplianceHours] = useState(() => {
    const map = {}
    defaultAppliances.forEach((a) => { map[a.id] = a.hours })
    return map
  })

  // Estado para potencia editable por electrodoméstico
  const [appliancePowers, setAppliancePowers] = useState(() => {
    const map = {}
    defaultAppliances.forEach((a) => { map[a.id] = a.watts })
    return map
  })

  // Compute kWh from watts and hours
  const compute = (e) => {
    e.preventDefault()
    const p = parseFloat(watts || 0)
    const h = parseFloat(hours || 0)
    if (!p || !h) {
      setResult(null)
      return
    }
    const kwh = (p * h) / 1000
    setResult({ powerW: p, hours: h, kwh })
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">{lang === 'es' ? 'Cálculo de Consumo' : 'Consumption Calculator'}</h1>
        <p className="text-gray-700 mb-6">{lang === 'es'
          ? 'Aquí podrás calcular cuánta energía (en kWh) consume un aparato según su potencia y el tiempo de uso. UPCO vende energía en unidades de kW (kilowatt) y el consumo depende del tiempo: la fórmula básica es potencia × tiempo = energía.'
          : 'Use this tool to estimate how much energy (in kWh) an appliance uses based on its power and hours of use. UPCO sells energy in kWh units; the basic formula is power × time = energy.'}</p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold mb-3">{lang === 'es' ? 'Cómo encontrar la potencia (W)' : 'Where to find the power (W)'}</h2>
            <p className="text-gray-700 mb-3">{lang === 'es'
              ? 'Mira la etiqueta del electrodoméstico, la caja o el manual. Muchos aparatos (bombillas, ventiladores, microondas) indican su potencia en "W" (vatios).'
              : 'Check the label on the device, the box or the manual. Many appliances (bulbs, fans, microwaves) show their power in "W" (watts).'}
            </p>
            <p className="text-sm text-gray-600">{lang === 'es' ? '¿Qué son los watts? Es una medida de cuánta energía usa un aparato por segundo; más watts = más consumo.' : 'What are watts? It measures how much power a device uses; more watts = more energy used.'}</p>
            <p className="text-sm text-gray-600 mt-3">{lang === 'es' ? 'Ejemplo práctico: una bombilla de 60 W encendida 5 horas consume (60 × 5) / 1000 = 0.3 kWh.' : 'Practical example: a 60 W bulb on for 5 hours uses (60 × 5) / 1000 = 0.3 kWh.'}</p>
          </div>

          <form onSubmit={compute} className="bg-white p-6 rounded shadow">

            <h2 className="font-semibold mb-3">{lang === 'es' ? 'Calculadora simple' : 'Simple calculator'}</h2>
            <p className="text-sm text-gray-600 mb-4">{lang === 'es' ? 'Introduce la potencia del aparato en vatios (W) y las horas que lo usas.' : 'Enter the device power in watts (W) and the hours you use it.'}</p>

            <label className="block text-sm font-medium">{lang === 'es' ? 'Potencia (W)' : 'Power (W)'}</label>
            <input value={watts} onChange={(e) => setWatts(e.target.value)} className="mt-1 mb-3 w-full border rounded px-3 py-2" placeholder={lang === 'es' ? 'ej. 60' : 'e.g. 60'} />

            <label className="block text-sm font-medium">{lang === 'es' ? 'Horas de uso (por día)' : 'Hours of use (per day)'}</label>
            <input value={hours} onChange={(e) => setHours(e.target.value)} className="mt-1 mb-4 w-full border rounded px-3 py-2" placeholder={lang === 'es' ? 'ej. 5' : 'e.g. 5'} />

            <div className="flex gap-3">
              <button type="submit" className="bg-[#01c100] text-black px-4 py-2 rounded font-semibold">{lang === 'es' ? 'Calcular' : 'Calculate'}</button>
              <button type="button" onClick={() => { setWatts(''); setHours(''); setResult(null) }} className="border px-4 py-2 rounded">{lang === 'es' ? 'Limpiar' : 'Clear'}</button>
            </div>

            {result && (
              <div className="mt-6 bg-gray-50 p-4 rounded">
                <div>{lang === 'es' ? 'Consumo diario estimado:' : 'Estimated daily consumption:'} <strong>{result.kwh.toFixed(3)} kWh</strong></div>
                <div className="mt-2 text-sm text-gray-600">{lang === 'es' ? 'Multiplica por la tarifa por kWh para estimar el coste.' : 'Multiply by your kWh rate to estimate cost.'}</div>
              </div>
            )}
          </form>
        </section>

        <section className="bg-white p-6 rounded shadow mb-6">
          <h3 className="font-semibold mb-2">{lang === 'es' ? 'Tabla de consumos aproximados' : 'Approximate consumption table'}</h3>
          <p className="text-gray-700 mb-4">{lang === 'es' ? 'Valores aproximados de potencia y un estimado de horas por día. Puedes modificar las horas y el consumo para ver el consumo y el coste diario según la tarifa.' : 'Approximate power values and estimated hours per day. You can edit the hours to see daily consumption and cost according to the tariff.'}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">{lang === 'es' ? 'Electrodoméstico' : 'Appliance'}</th>
                  <th className="py-2">{lang === 'es' ? 'Potencia (W)' : 'Power (W)'}</th>
                  <th className="py-2">{lang === 'es' ? 'Horas/día' : 'Hours/day'}</th>
                  <th className="py-2">kWh/día</th>
                  <th className="py-2">{lang === 'es' ? 'Costo Lps/día' : 'Cost Lps/day'}</th>
                </tr>
              </thead>
              <tbody>
                {defaultAppliances.map((app) => {
                  const h = parseFloat(applianceHours[app.id] || 0)
                  const power = parseFloat(appliancePowers[app.id] || 0)
                  const kwh = (power * (h || 0)) / 1000
                  const cost = kwh * TARIFF
                  return (
                    <tr key={app.id} className="border-b align-top">
                      <td className="py-2">{app.name}</td>
                      <td className="py-2">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={appliancePowers[app.id]}
                          onChange={(e) => setAppliancePowers(prev => ({ ...prev, [app.id]: e.target.value }))}
                          className="w-28 border rounded px-2 py-1"
                        />
                      </td>
                      <td className="py-2">
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={applianceHours[app.id]}
                          onChange={(e) => setApplianceHours(prev => ({ ...prev, [app.id]: e.target.value }))}
                          className="w-24 border rounded px-2 py-1"
                        />
                      </td>
                      <td className="py-2">{kwh.toFixed(3)}</td>
                      <td className="py-2">{cost.toFixed(2)} Lps</td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr className="border-t font-semibold">
                  <td className="py-2">{lang === 'es' ? 'Totales' : 'Totals'}</td>
                  <td></td>
                  <td></td>
                  <td className="py-2">
                    {(() => {
                      const totalKwh = defaultAppliances.reduce((sum, app) => {
                        const h = parseFloat(applianceHours[app.id] || 0)
                        const power = parseFloat(appliancePowers[app.id] || 0)
                        return sum + ((power * (h || 0)) / 1000)
                      }, 0)
                      return totalKwh.toFixed(3)
                    })()}
                  </td>
                  <td className="py-2">
                    {(() => {
                      const totalKwh = defaultAppliances.reduce((sum, app) => {
                        const h = parseFloat(applianceHours[app.id] || 0)
                        const power = parseFloat(appliancePowers[app.id] || 0)
                        return sum + ((power * (h || 0)) / 1000)
                      }, 0)
                      return (totalKwh * TARIFF).toFixed(2) + ' Lps'
                    })()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="text-sm text-gray-600 mt-3">{lang === 'es' ? `Tarifa usada: ${TARIFF} Lps/kWh` : `Tariff used: ${TARIFF} Lps/kWh`}</div>
        </section>

   
      </div>
    </main>
  )
}
