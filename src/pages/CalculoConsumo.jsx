import React, { useState, useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function CalculoConsumo() {
  const { lang } = useContext(LanguageContext)
  const [watts, setWatts] = useState('')
  const [hours, setHours] = useState('')
  const [result, setResult] = useState(null)

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
              <button type="submit" className="bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">{lang === 'es' ? 'Calcular' : 'Calculate'}</button>
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

        <section className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Resumen breve</h3>
          <p className="text-gray-700">La empresa vende energía medida en kW (kilowatt). El consumo real depende del tiempo de uso: una potencia más alta o un mayor número de horas incrementa el consumo. Usa la calculadora para estimar el consumo y multiplicarlo por la tarifa por kWh para estimar el coste.</p>
        </section>
      </div>
    </main>
  )
}
