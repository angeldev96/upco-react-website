import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Contact() {
  const { lang } = useContext(LanguageContext)

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">{lang === 'es' ? 'Contacto' : 'Contact'}</h2>
        <p className="mb-4">{lang === 'es' ? 'Email: help@utilapowercompany.com | Teléfono: +504 8828-1644' : 'Email: help@utilapowercompany.com | Phone: +504 8828-1644'}</p>

        <form className="max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium">{lang === 'es' ? 'Nombre' : 'Name'}</label>
            <input className="mt-1 w-full border rounded px-3 py-2" placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'} />
          </div>
          <div>
            <label className="block text-sm font-medium">{lang === 'es' ? 'Correo' : 'Email'}</label>
            <input className="mt-1 w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">{lang === 'es' ? 'Mensaje' : 'Message'}</label>
            <textarea className="mt-1 w-full border rounded px-3 py-2 h-32" placeholder={lang === 'es' ? 'Escribe tu mensaje aquí' : 'Write your message here'} />
          </div>
          <div>
            <button type="button" className="bg-blue-700 text-white px-4 py-2 rounded">{lang === 'es' ? 'Enviar' : 'Send'}</button>
          </div>
        </form>
      </div>
    </main>
  )
}
