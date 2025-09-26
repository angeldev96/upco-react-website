import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { IconBrandWhatsapp, IconBrandTelegram, IconPhone, IconMail } from '@tabler/icons-react'

export default function Reclamos() {
  const { lang } = useContext(LanguageContext)

  useEffect(() => {
    document.title = lang === 'es' ? 'Reclamos — UPCO' : 'Complaints — UPCO'
  }, [lang])

  const phone = '+50488281644'
  const wa = `https://wa.me/50488281644`
  const telegram = `https://t.me/+50488281644`
  const mailto = `mailto:help@utilapowercompany.com`

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">{lang === 'es' ? 'Reclamos y Consultas' : 'Complaints & Inquiries'}</h1>

        <p className="text-gray-700 mb-6">
          {lang === 'es'
            ? 'Si tienes un reclamo, queja o consulta, por favor contáctanos a través de uno de los canales abajo. Responderemos a la brevedad.'
            : 'If you have a complaint, concern or inquiry, please contact us using one of the channels below. We will respond promptly.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href={wa} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-green-100 rounded shadow">
            <span className="p-2 bg-white rounded-full"><IconBrandWhatsapp size={24} /></span>
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-gray-600">{phone}</div>
            </div>
          </a>

          <a href={telegram} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-blue-50 rounded shadow">
            <span className="p-2 bg-white rounded-full"><IconBrandTelegram size={24} /></span>
            <div>
              <div className="font-semibold">Telegram</div>
              <div className="text-sm text-gray-600">{lang === 'es' ? 'También disponible en Telegram' : 'Also available on Telegram'}</div>
            </div>
          </a>

          <a href={`tel:${phone}`} className="flex items-center gap-3 p-4 bg-white rounded shadow">
            <span className="p-2 bg-white rounded-full border"><IconPhone size={24} /></span>
            <div>
              <div className="font-semibold">{lang === 'es' ? 'Llamada' : 'Call'}</div>
              <div className="text-sm text-gray-600">{phone}</div>
            </div>
          </a>

          <a href={mailto} className="flex items-center gap-3 p-4 bg-white rounded shadow">
            <span className="p-2 bg-white rounded-full border"><IconMail size={24} /></span>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-gray-600">help@utilapowercompany.com</div>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
