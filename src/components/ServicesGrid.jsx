import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import useReveal from '../hooks/useReveal'

const CARD = ({ title, children, to, onOpen }) => (
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
          { /* text follows language in parent, keep simple */ }
          Leer Mas
        </Link>
      ) : onOpen ? (
        <button onClick={onOpen} className="mt-4 inline-block bg-[#4fd23f] text-black font-semibold px-4 py-2 rounded shadow hover:bg-[#45c235] transition-colors">
          Leer Mas
        </button>
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
  const [openRequest, setOpenRequest] = useState(false)

  return (
  <section ref={ref} className="py-16 bg-gray-50 reveal" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold">{lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}</h2>
          <p className="text-sm text-gray-500 mt-2">{lang === 'es' ? 'Servicios de energía prepagada en la zona de Utila en Islas de la Bahia' : 'Prepaid energy services in the Utila area of the Bay Islands'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CARD title={lang === 'es' ? 'Solicitud de Servicio' : 'Service Request'} onOpen={() => setOpenRequest(true)}>{lang === 'es' ? '¿Se ha trasladado o piensa hacerlo? solicite su servicio con nosotros' : 'Moving or planning to move? Request service with us'}</CARD>
          <CARD title={lang === 'es' ? 'Pagos' : 'Payments'} to="/payments">{lang === 'es' ? 'Descubre las maneras de pago que puedes utilizar.' : 'Discover the payment methods you can use.'}</CARD>
          <CARD title={lang === 'es' ? 'Calcula tu Consumo' : 'Calculate Your Consumption'} to="/calculo-consumo">{lang === 'es' ? 'Descubre cuales serian tus gastos base contactanos' : 'Find out what your base costs would be, contact us'}</CARD>
          <CARD title={lang === 'es' ? 'Equipo Comercial' : 'Commercial Equipment'}>{lang === 'es' ? 'Proveemos equipo para la distribución de energía a negocios' : 'We provide equipment for energy distribution to businesses'}</CARD>
          <CARD title={lang === 'es' ? 'Equipo para el Hogar' : 'Home Equipment'}>{lang === 'es' ? 'Equipo de distribucion energetico para uso privado' : 'Energy distribution equipment for private use'}</CARD>
          <CARD title={lang === 'es' ? 'Otros Productos' : 'Other Products'}>{lang === 'es' ? 'Produccion energetica y metodos de distribucion' : 'Energy production and distribution methods'}</CARD>
        </div>
      </div>
      {openRequest && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpenRequest(false)} />
          <div className="relative h-full overflow-auto">
            <div className="max-w-3xl mx-auto h-full flex items-center">
              <div className="bg-white w-full m-4 rounded-lg p-6 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">{lang === 'es' ? 'Solicitud de Instalación' : 'Installation Request'}</h3>
                  <button onClick={() => setOpenRequest(false)} aria-label="Cerrar" className="text-gray-600 hover:text-black">✕</button>
                </div>

                <div className="mt-4 text-gray-700 space-y-4">
                  <p>{lang === 'es' ? 'Si necesitas apoyo con la instalación, contáctanos por WhatsApp para coordinar. Horario de atención para gestión de instalaciones: Lunes a Sábado, 7:00 AM a 7:00 PM.' : 'If you need installation support, contact us via WhatsApp to coordinate. Installation scheduling hours: Monday to Saturday, 7:00 AM to 7:00 PM.'}</p>

                  <div>
                    <h4 className="font-semibold">{lang === 'es' ? 'Documentación requerida' : 'Required documents'}</h4>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>{lang === 'es' ? 'Carta catastral' : 'Land registry letter (carta catastral)'}</li>
                      <li>{lang === 'es' ? 'Copia de la documentación de la propiedad' : 'Copy of property ownership documents'}</li>
                      <li>{lang === 'es' ? 'Copia de la identidad' : 'Copy of ID'}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">{lang === 'es' ? 'Costos y material' : 'Costs & materials'}</h4>
                    <p className="mt-2 text-gray-700">{lang === 'es' ? 'La instalación no tiene costo excepto en el caso de que se requiera cable extra. UPCO proporciona hasta 60 pies de cable sin cargo.' : 'Installation has no charge unless extra cable is required. UPCO provides up to 60 feet of cable free of charge.'}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">{lang === 'es' ? 'Cómo solicitar' : 'How to request'}</h4>
                    <ol className="list-decimal list-inside mt-2 text-gray-700">
                      <li>{lang === 'es' ? 'Reúne la documentación requerida.' : 'Gather the required documents.'}</li>
                      <li>{lang === 'es' ? 'Visita la oficina UPCO (presencial) para completar la solicitud.' : 'Visit the UPCO office (in-person) to complete the request.'}</li>
                      <li>{lang === 'es' ? 'Si no puedes acercarte, contáctanos por WhatsApp para revisar opciones (puede ser necesario presentar documentación en persona).' : 'If you cannot come in person, contact us via WhatsApp to review options (in-person documentation may still be required).'}</li>
                    </ol>
                  </div>

                  <div className="mt-4">
                    <a href="https://wa.me/50488281644" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">
                      {lang === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
