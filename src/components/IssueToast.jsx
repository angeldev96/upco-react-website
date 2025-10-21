import React, { useContext, useState } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { IconBrandWhatsapp, IconBrandTelegram, IconX } from '@tabler/icons-react'

export default function IssueToast() {
  const { lang } = useContext(LanguageContext)
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div className="fixed bottom-6 right-6 max-w-sm z-50">
      <div className="bg-white border shadow-lg rounded-lg p-4 flex gap-3 items-start">
        <div className="flex-1">
          <div className="font-semibold">{lang === 'es' ? '¿Problemas con tu medidor o teclado?' : 'Problems with your meter or keypad?'}</div>
          <div className="text-sm text-gray-600 mt-1">
            {lang === 'es'
              ? 'Si tienes problemas con el medidor, el teclado o cortes de energía, solicita ayuda para que nuestro equipo técnico pueda crear una orden de servicio.'
              : "If you're experiencing issues with your meter, keypad, or power supply, request assistance so our technical team can create a service order."}
          </div>

          <div className="flex gap-2 mt-3">
            <a href="https://wa.me/50488281644" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#01c100] text-black px-3 py-2 rounded font-semibold">
              <IconBrandWhatsapp size={16} /> WhatsApp
            </a>
            <a href="https://t.me/+50488281644" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-50 text-black px-3 py-2 rounded font-semibold">
              <IconBrandTelegram size={18} /> Telegram
            </a>
          </div>
        </div>

        <button onClick={() => setOpen(false)} aria-label="Close" className="p-1 text-gray-500 hover:text-gray-800">
          <IconX size={18} />
        </button>
      </div>
    </div>
  )
}
