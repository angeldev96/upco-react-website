import React from 'react'

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 id="contact-heading" className="text-3xl font-bold">Nuestros Contactos</h2>
          <p className="text-sm text-gray-500 mt-2">Si tienes preguntas, necesitas soporte o deseas más información sobre la energía prepagada de UPCO en Utila, no dudes en contactarnos.</p>
        </div>

        <div className="bg-white shadow-lg rounded p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="font-semibold">OFICINA PRINCIPAL</div>
                  <div className="text-sm text-gray-500">Hollands Road, 34101 Utila, Islas de la Bahía</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <div className="font-semibold">LLÁMANOS</div>
                  <div className="text-sm text-gray-500">Support: 88281644<br/>Office: 88281644<br/>WhatsApp: 97960605</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <div className="font-semibold">ESCRÍBENOS</div>
                  <div className="text-sm text-gray-500">help@utilapowercompany.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-lg overflow-hidden">
          <div className="p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda?</h3>
            <p className="text-gray-600 mb-6">Contáctanos por WhatsApp para soporte rápido y asistencia personalizada.</p>
            <a href="https://wa.me/50497960605" target="_blank" rel="noreferrer" className="inline-block bg-[#4fd23f] text-black font-semibold px-6 py-3 rounded shadow hover:bg-[#45c235] transition-colors">
              🟢 Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
