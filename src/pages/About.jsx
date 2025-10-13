import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function About() {
  const { lang } = useContext(LanguageContext)

  return (
    <main className="py-12">
      <div className="container mx-auto px-6">
        {/* Hero / Breadcrumb */}
        <div className="bg-gray-800 text-white rounded-lg p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold">{lang === 'es' ? 'Sobre Nosotros - UPCO' : 'About Us - UPCO'}</h1>
              <p className="text-sm text-gray-300 mt-2">{lang === 'es' ? 'Energía confiable y sostenible para la isla de Útila' : 'Reliable and sustainable energy for the island of Utila'}</p>
            </div>
            <nav className="text-sm text-gray-200/80">
              <span className="opacity-70">{lang === 'es' ? 'Inicio' : 'Home'}</span> <span className="text-[#4fd23f]">/</span> <span>{lang === 'es' ? 'Sobre Nosotros' : 'About Us'}</span>
            </nav>
          </div>
        </div>

        {/* Intro + Media */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">{lang === 'es' ? 'Energía que impulsa a Útila' : "Energy powering Utila"}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {lang === 'es'
                ? 'Utila Power Company es la empresa encargada de suministrar el servicio eléctrico seguro, accesible y responsable en la isla de Útila. Combinamos generación diésel con soluciones fotovoltaicas y sistemas de respaldo, para ofrecer una red confiable y preparada para el futuro.'
                : 'Utila Power Company is the company responsible for supplying safe, accessible, and responsible electrical service on the island of Utila. We combine diesel generation with photovoltaic solutions and backup systems to provide a reliable network prepared for the future.'}
            </p>

            {/* ¿Quiénes somos? */}
            <section className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{lang === 'es' ? '¿QUIÉNES SOMOS?' : 'WHO WE ARE'}</h3>
              <p className="text-gray-700 mb-2">
                {lang === 'es'
                  ? 'Utila Power Company es la empresa encargada de la generación, distribución y comercialización de la energía eléctrica en la isla de Útila, brindando un servicio confiable y eficiente que impulsa el desarrollo económico y social de la comunidad.'
                  : 'Utila Power Company is the company responsible for the generation, distribution and commercialization of electrical energy on the island of Utila, providing a reliable and efficient service that supports the island\'s economic and social development.'}
              </p>

              <p className="text-gray-700">
                {lang === 'es'
                  ? 'Nuestro compromiso es garantizar un suministro energético estable, sostenible y accesible, contribuyendo al bienestar de los hogares, comercios e instituciones de la isla. Como parte de nuestra visión de desarrollo responsable, impulsamos iniciativas que promueven la eficiencia energética y la conservación del medio ambiente, fortaleciendo la armonía entre el progreso y la naturaleza que nos rodea.'
                  : 'Our commitment is to ensure a stable, sustainable and accessible energy supply, contributing to the wellbeing of households, businesses and institutions on the island. As part of our vision for responsible development, we promote initiatives that encourage energy efficiency and environmental conservation, strengthening harmony between progress and the surrounding nature.'}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{lang === 'es' ? 'Misión' : 'Mission'}</h3>
                <p className="text-gray-700">{lang === 'es'
                  ? 'Proveer un suministro de energía confiable, accesible y sostenible para la comunidad de Útila, mediante la generación y distribución de electricidad, fortaleciendo el crecimiento económico, el turismo y la calidad de vida en la isla. Con un enfoque en innovación y sostenibilidad, trabajamos constantemente en la optimización de nuestros procesos para minimizar el impacto ambiental y asegurar un futuro energético estable para las generaciones venideras.'
                  : 'To provide a reliable, accessible and sustainable energy supply for the Utila community through power generation and distribution, strengthening economic growth, tourism and quality of life on the island. With a focus on innovation and sustainability, we continuously work to optimize our processes to minimize environmental impact and ensure a stable energy future for coming generations.'}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{lang === 'es' ? 'Visión' : 'Vision'}</h3>
                <p className="text-gray-700">{lang === 'es'
                  ? 'Ser referentes en la prestación de servicios energéticos de sistemas aislados en la región, destacándonos por nuestro enfoque en la sostenibilidad, innovación y responsabilidad social.'
                  : 'To be a reference in the provision of isolated system energy services in the region, standing out for our focus on sustainability, innovation and social responsibility.'}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">{lang === 'es' ? 'Nuestros Valores' : 'Our Values'}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{lang === 'es' ? 'Servicio al cliente' : 'Customer service'}</li>
                <li>{lang === 'es' ? 'Sostenibilidad' : 'Sustainability'}</li>
                <li>{lang === 'es' ? 'Compromiso' : 'Commitment'}</li>
                <li>{lang === 'es' ? 'Innovación' : 'Innovation'}</li>
              </ul>
            </div>

       
          </div>

          <aside className="order-first lg:order-last">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img src="https://res.cloudinary.com/die0kcjrp/image/upload/v1757566961/Captura-de-pantalla-2025-05-08-100826_bavax4.png" alt="UPCO imagen corporativa" className="w-full h-56 object-cover" />
              <div className="p-4 border-t">
                <p className="text-sm text-gray-600">Equipo operativo y oficinas principales — UPCO</p>
              </div>
            </div>
          </aside>
        </section>

        {/* Video section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">{lang === 'es' ? 'Video Corporativo' : 'Corporate Video'}</h3>
          <div className="bg-black rounded-lg overflow-hidden shadow">
            <video controls className="w-full h-auto max-h-[640px] bg-black">
              <source src="https://res.cloudinary.com/die0kcjrp/video/upload/v1757567038/Video_Corporativo_UPCO_baj4ou.mp4" type="video/mp4" />
              Tu navegador no soporta video.
            </video>
          </div>
        </section>

        {/* Footer note / small contact */}
        <section className="bg-gray-50 p-6 rounded-lg text-gray-700">
          <h4 className="font-semibold mb-2">{lang === 'es' ? '¿Necesitas ayuda para realizar un pago o solicitud?' : 'Need help making a payment or request?'}</h4>
          <p className="mb-3">{lang === 'es' ? 'Comunícate por WhatsApp o visita nuestras oficinas. Estamos disponibles todos los días para ayudarte con tu servicio.' : 'Contact us via WhatsApp or visit our offices. We are available every day to assist with your service.'}</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/50488281644" className="inline-block bg-[#25D366] text-white px-4 py-2 rounded">WhatsApp</a>
            <a href="/contact" className="inline-block border px-4 py-2 rounded">{lang === 'es' ? 'Contacto' : 'Contact'}</a>
          </div>
        </section>
      </div>
    </main>
  )
}
