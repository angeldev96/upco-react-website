import React from 'react'

const CARD = ({ title, children }) => (
  <article className="bg-white p-6 shadow-lg rounded">
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-16 h-16 flex items-center justify-center text-gray-700">
        {/* simple icon placeholder */}
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20h14" />
        </svg>
      </div>
      <h4 className="font-bold uppercase tracking-wide">{title}</h4>
      <p className="text-sm text-gray-500">{children}</p>
      <a className="mt-4 inline-block bg-[#4fd23f] text-black font-semibold px-4 py-2 rounded shadow hover:bg-[#45c235] transition-colors" href="#">
        Leer Mas
      </a>
    </div>
  </article>
)

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold">Nuestros Servicios</h2>
          <p className="text-sm text-gray-500 mt-2">Servicios de energía prepagada en la zona de Utila en Islas de la Bahia</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CARD title="Solicitud de Servicio">¿Se ha trasladado o piensa hacerlo? solicite su servicio con nosotros</CARD>
          <CARD title="Pagos">Descubre las maneras de pago que puedes utilizar.</CARD>
          <CARD title="Calcula tu Consumo">Descubre cuales serian tus gastos base contactanos</CARD>
          <CARD title="Equipo Comercial">Proveemos equipo para la distribución de energía a negocios</CARD>
          <CARD title="Equipo para el Hogar">Equipo de distribución energetico para uso privado</CARD>
          <CARD title="Otros Productos">Producción energetica y metodos de distribución</CARD>
        </div>
      </div>
    </section>
  )
}
