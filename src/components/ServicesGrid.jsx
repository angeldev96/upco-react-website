import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import useReveal from '../hooks/useReveal'

const CARD = ({ title, children, to }) => (
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
      {to ? (
        <Link to={to} className="mt-4 inline-block bg-[#4fd23f] text-black font-semibold px-4 py-2 rounded shadow hover:bg-[#45c235] transition-colors">
          Leer Mas
        </Link>
      ) : (
        <a className="mt-4 inline-block bg-[#4fd23f] text-black font-semibold px-4 py-2 rounded shadow hover:bg-[#45c235] transition-colors" href="#">
          Leer Mas
        </a>
      )}
    </div>
  </article>
)

export default function ServicesGrid() {
  const { lang } = useContext(LanguageContext)
  const ref = useReveal()

  return (
  <section ref={ref} className="py-16 bg-gray-50 reveal" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold">{lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}</h2>
          <p className="text-sm text-gray-500 mt-2">{lang === 'es' ? 'Servicios de energía prepagada en la zona de Utila en Islas de la Bahia' : 'Prepaid energy services in the Utila area of the Bay Islands'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CARD title={lang === 'es' ? 'Solicitud de Servicio' : 'Service Request'}>{lang === 'es' ? '¿Se ha trasladado o piensa hacerlo? solicite su servicio con nosotros' : 'Moving or planning to move? Request service with us'}</CARD>
          <CARD title={lang === 'es' ? 'Pagos' : 'Payments'} to="/payments">{lang === 'es' ? 'Descubre las maneras de pago que puedes utilizar.' : 'Discover the payment methods you can use.'}</CARD>
          <CARD title={lang === 'es' ? 'Calcula tu Consumo' : 'Calculate Your Consumption'} to="/calculo-consumo">{lang === 'es' ? 'Descubre cuales serian tus gastos base contactanos' : 'Find out what your base costs would be, contact us'}</CARD>
          <CARD title={lang === 'es' ? 'Equipo Comercial' : 'Commercial Equipment'}>{lang === 'es' ? 'Proveemos equipo para la distribución de energía a negocios' : 'We provide equipment for energy distribution to businesses'}</CARD>
          <CARD title={lang === 'es' ? 'Equipo para el Hogar' : 'Home Equipment'}>{lang === 'es' ? 'Equipo de distribucion energetico para uso privado' : 'Energy distribution equipment for private use'}</CARD>
          <CARD title={lang === 'es' ? 'Otros Productos' : 'Other Products'}>{lang === 'es' ? 'Produccion energetica y metodos de distribucion' : 'Energy production and distribution methods'}</CARD>
        </div>
      </div>
    </section>
  )
}
