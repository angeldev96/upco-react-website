import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import useReveal from '../hooks/useReveal'
import { IconMapPin, IconPhone, IconMail, IconBrandWhatsapp } from '@tabler/icons-react'

export default function ContactSection() {
  const { lang } = useContext(LanguageContext)
  const ref = useReveal()

  return (
  <section ref={ref} className="py-16 bg-gray-50 reveal" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 id="contact-heading" className="text-3xl font-bold">{lang === 'es' ? 'Nuestros Contactos' : 'Our Contacts'}</h2>
          <p className="text-sm text-gray-500 mt-2">{lang === 'es' ? 'Si tienes preguntas, necesitas soporte o deseas más información sobre la energía prepagada de UPCO en Utila, no dudes en contactarnos.' : 'If you have questions, need support or want more information about UPCO prepaid energy in Utila, don\'t hesitate to contact us.'}</p>
        </div>

        <div className="bg-white shadow-lg rounded p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#0b5fa8]"><IconMapPin size={22} stroke={1.5} /></div>
                <div>
                  <div className="font-semibold">{lang === 'es' ? 'OFICINA PRINCIPAL' : 'MAIN OFFICE'}</div>
                  <div className="text-sm text-gray-500">Hollands Road, 34101 Utila, Islas de la Bahía</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#0b5fa8]"><IconPhone size={22} stroke={1.5} /></div>
                <div>
                  <div className="font-semibold">{lang === 'es' ? 'LLÁMANOS' : 'CALL US'}</div>
                  <div className="text-sm text-gray-500">Support: 88281644<br/>Office: 88281644<br/>WhatsApp: +504 8828-1644</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#0b5fa8]"><IconMail size={22} stroke={1.5} /></div>
                <div>
                  <div className="font-semibold">{lang === 'es' ? 'ESCRÍBENOS' : 'WRITE TO US'}</div>
                  <div className="text-sm text-gray-500">help@utilapowercompany.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-lg overflow-hidden">
          <div className="p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">{lang === 'es' ? '¿Necesitas ayuda?' : 'Need help?'}</h3>
            <p className="text-gray-600 mb-6">{lang === 'es' ? 'Contáctanos por WhatsApp para soporte rápido y asistencia personalizada.' : 'Contact us via WhatsApp for quick support and personalized assistance.'}</p>
            <a
              href="https://wa.me/50488281644"
              target="_blank"
              rel="noreferrer"
              aria-label={lang === 'es' ? 'Contáctanos por WhatsApp' : 'Contact us on WhatsApp'}
              className="inline-flex items-center gap-3 bg-[#4fd23f] text-black font-semibold px-5 py-3 rounded shadow hover:bg-[#45c235] transition-colors"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-[#075E54] text-white rounded-full">
                <IconBrandWhatsapp size={16} stroke={1.5} />
              </span>
              <span>{lang === 'es' ? 'Contáctanos por WhatsApp' : 'Contact us on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
