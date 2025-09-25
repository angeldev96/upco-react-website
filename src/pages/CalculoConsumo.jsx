import React, { useState } from 'react'

export default function CalculoConsumo() {
  const [voltage, setVoltage] = useState('')
  const [current, setCurrent] = useState('')
  const [watts, setWatts] = useState('')
  const [hours, setHours] = useState('')
  const [result, setResult] = useState(null)

  // Calculate power (W) from V and A if provided, else use watts input
  const compute = (e) => {
    e.preventDefault()
    let powerW = 0
    if (watts) {
      powerW = parseFloat(watts)
    } else if (voltage && current) {
      powerW = parseFloat(voltage) * parseFloat(current)
    }

    const h = parseFloat(hours || 0)
    if (!powerW || !h) {
      setResult(null)
      return
    }

    // kWh = (W * hours) / 1000
    const kwh = (powerW * h) / 1000
    setResult({ powerW, hours: h, kwh })
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Cálculo de Consumo</h1>
        <p className="text-gray-700 mb-6">Aquí podrás calcular cuánta energía (en kWh) consume un aparato según su potencia y el tiempo de uso. UPCO vende energía en unidades de kW (kilowatt) y el consumo depende del tiempo: la fórmula básica es potencia × tiempo = energía.</p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold mb-3">Fórmulas rápidas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Potencia (W) = Voltaje (V) × Corriente (A)</li>
              <li>Potencia (kW) = Potencia (W) / 1000</li>
              <li>Consumo (kWh) = Potencia (kW) × Tiempo (horas)</li>
              <li>Equivalente práctico: kWh = (W × horas) / 1000</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">Ejemplo: una lámpara de 60 W encendida 5 horas consume (60 × 5) / 1000 = 0.3 kWh.</p>
            <p className="text-sm text-gray-600 mt-3">Nota: UPCO factura en kW·h (kilowatt-hora). A mayor tiempo de uso, mayor consumo.</p>
          </div>

          <form onSubmit={compute} className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold mb-3">Calculadora rápida</h2>
            <p className="text-sm text-gray-600 mb-4">Rellena voltaje y corriente, o potencia en vatios (W), y horas de uso.</p>

            <label className="block text-sm font-medium">Voltaje (V)</label>
            <input value={voltage} onChange={(e) => setVoltage(e.target.value)} className="mt-1 mb-3 w-full border rounded px-3 py-2" placeholder="ej. 120" />

            <label className="block text-sm font-medium">Corriente (A)</label>
            <input value={current} onChange={(e) => setCurrent(e.target.value)} className="mt-1 mb-3 w-full border rounded px-3 py-2" placeholder="ej. 0.5" />

            <div className="text-sm text-gray-500 mb-3">o</div>

            <label className="block text-sm font-medium">Potencia (W)</label>
            <input value={watts} onChange={(e) => setWatts(e.target.value)} className="mt-1 mb-3 w-full border rounded px-3 py-2" placeholder="ej. 60" />

            <label className="block text-sm font-medium">Horas de uso</label>
            <input value={hours} onChange={(e) => setHours(e.target.value)} className="mt-1 mb-4 w-full border rounded px-3 py-2" placeholder="ej. 5" />

            <div className="flex gap-3">
              <button type="submit" className="bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">Calcular</button>
              <button type="button" onClick={() => { setVoltage(''); setCurrent(''); setWatts(''); setHours(''); setResult(null) }} className="border px-4 py-2 rounded">Limpiar</button>
            </div>

            {result && (
              <div className="mt-6 bg-gray-50 p-4 rounded">
                <div>Potencia calculada: <strong>{result.powerW} W</strong></div>
                <div>Horas: <strong>{result.hours} h</strong></div>
                <div className="mt-2">Consumo: <strong>{result.kwh.toFixed(3)} kWh</strong></div>
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
