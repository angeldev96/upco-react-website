import React, { useContext, useState } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { IconCash, IconBuildingBank, IconBrandPaypal } from '@tabler/icons-react'

export default function Payments() {
  const { lang } = useContext(LanguageContext)
  const [method, setMethod] = useState('online') // 'online' | 'cash'

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          {lang === 'es' ? 'Métodos de Pago Flexibles y Seguros' : 'Flexible & Secure Payment Methods'}
        </h1>
        <p className="text-gray-600 mb-8">
          {lang === 'es'
            ? 'En UPCO, la compra de energía eléctrica es de manera prepago, y ofrecemos varias opciones para realizar tu pago de forma fácil y cómoda.'
            : "At UPCO we sell prepaid energy. Choose a convenient payment method below to complete your purchase."}
        </p>

        {/* Selector visual */}
        <div className="mb-8">
          <div className="flex gap-4 flex-col sm:flex-row">
            <button
              type="button"
              onClick={() => setMethod('cash')}
              aria-pressed={method === 'cash'}
              className={`flex items-center gap-4 w-full sm:w-auto px-5 py-4 rounded-lg shadow transition
                ${method === 'cash' ? 'ring-2 ring-[#4fd23f] bg-white' : 'bg-white/80 hover:shadow-md'}`}
            >
              <span className="p-2 bg-gray-100 rounded-full">
                <IconCash size={28} />
              </span>
              <div className="text-left">
                <div className="font-semibold">{lang === 'es' ? 'Pago en efectivo' : 'Cash Payment'}</div>
                <div className="text-sm text-gray-500">{lang === 'es' ? 'Paga en nuestras oficinas.' : 'Pay in person at our offices.'}</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMethod('online')}
              aria-pressed={method === 'online'}
              className={`flex items-center gap-4 w-full sm:w-auto px-5 py-4 rounded-lg shadow transition
                ${method === 'online' ? 'ring-2 ring-[#4fd23f] bg-white' : 'bg-white/80 hover:shadow-md'}`}
            >
              <span className="p-2 bg-gray-100 rounded-full">
                <IconBuildingBank size={28} />
              </span>
              <div className="text-left">
                <div className="font-semibold">{lang === 'es' ? 'Pagos online (Transferencias)' : 'Online Payments (Transfers)'}</div>
                <div className="text-sm text-gray-500">{lang === 'es' ? 'Transferencias bancarias y PayPal.' : 'Bank transfers and PayPal.'}</div>
              </div>
            </button>
          </div>
        </div>

        {/* Detalle según selección */}
        <section className="bg-white rounded-lg shadow p-6">
          {method === 'online' ? (
            <div className="text-gray-800">
              <h2 className="text-xl font-semibold mb-4">{lang === 'es' ? 'Transferencia Bancaria (Banpais y ACH)' : 'Bank Transfer (Banpais & ACH)'}</h2>

              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <strong>{lang === 'es' ? 'Realiza la transferencia' : 'Make the transfer'}</strong>
                  <div>No. Cuenta Banpais: <span className="font-semibold">216000314357</span></div>
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Guarda el comprobante' : 'Save your receipt'}</strong>
                  <div>{lang === 'es' ? 'Toma una foto clara del comprobante o captura de pantalla.' : 'Take a clear photo or screenshot of the confirmation.'}</div>
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Envíalo para procesar' : 'Send it to us to process'}</strong>
                  <div className="flex gap-3 mt-2">
                    <a href="https://wa.me/50488281644" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">
                      {lang === 'es' ? 'Enviar por WhatsApp' : 'Send via WhatsApp'}
                    </a>
                    <a href="mailto:help@utilapowercompany.com" className="inline-flex items-center gap-2 border px-4 py-2 rounded">
                      {lang === 'es' ? 'Enviar por correo' : 'Send by email'}
                    </a>
                  </div>
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Recibe tu código' : 'Receive your code'}</strong>
                  <div>{lang === 'es' ? 'Procesaremos el pago y te enviaremos el código de energía inmediatamente.' : 'We will process the payment and send your energy code immediately.'}</div>
                </li>
              </ol>

              <hr className="my-6" />

              <h3 className="text-lg font-semibold mb-3">{lang === 'es' ? 'Pago por PayPal' : 'PayPal'}</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li>{lang === 'es' ? 'Accede a www.paypal.com y entra en tu cuenta.' : 'Go to www.paypal.com and sign in.'}</li>
                <li>{lang === 'es' ? 'Haz clic en "Dinero" y luego en "Enviar dinero".' : 'Open the "Money" tab and choose "Send money".'}</li>
                <li>{lang === 'es' ? 'Selecciona "Enviar a amigos y familia" para evitar comisiones.' : 'Choose "Send to friends & family" to avoid fees.'}</li>
                <li>{lang === 'es' ? 'Introduce: trrnld@gmail.com y envía el pago.' : 'Enter: trrnld@gmail.com and send the payment.'}</li>
                <li>{lang === 'es' ? 'Envía la confirmación a help@utilapowercompany.com o por WhatsApp.' : 'Send the confirmation to help@utilapowercompany.com or via WhatsApp.'}</li>
              </ol>

              <div className="mt-6">
                <a href="https://wa.me/50488281644" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">
                  <IconBrandPaypal size={18} /> {lang === 'es' ? 'Enviar comprobante por WhatsApp' : 'Send receipt via WhatsApp'}
                </a>
              </div>
            </div>
          ) : (
            <div className="text-gray-800">
              <h2 className="text-xl font-semibold mb-4">{lang === 'es' ? 'Pago Presencial' : 'In-person Payment'}</h2>

              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <strong>{lang === 'es' ? 'Visítanos' : 'Visit us'}</strong>
                  <div>{lang === 'es' ? 'Oficina Principal (Barrio Hollands, Utila) — junto a Banco Atlántida.' : 'Main Office (Barrio Hollands, Utila) — next to Banco Atlántida.'}</div>
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Trae lo necesario' : 'Bring what you need'}</strong>
                  <div>{lang === 'es' ? 'Número de medidor y el monto a pagar. Aceptamos Lempiras y USD en efectivo.' : 'Bring your meter number and payment amount. We accept Lempiras and USD in cash.'}</div>
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Recibe tu recibo' : 'Receive your receipt'}</strong>
                  <div>{lang === 'es' ? 'Te entregaremos un recibo con el código de energía comprado.' : 'You will receive a receipt with the purchased energy code.'}</div>
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Horarios y acceso' : 'Hours & access'}</strong>
                  <div>
                    {lang === 'es'
                      ? 'Oficina Principal: 7:00 am – 7:00 pm (todos los días). Oficina Los Cayitos: lunes–sábado, 8:30–10:30 y 16:00–18:00 (solo en lancha).'
                      : 'Main Office: 7:00am–7:00pm daily. Los Cayitos Office: Mon–Sat 8:30–10:30 & 4:00–6:00 (boat access only).'}
                  </div>
                </li>
              </ol>

              <div className="mt-6">
                <a href="https://wa.me/50488281644" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#4fd23f] text-black px-4 py-2 rounded font-semibold">
                  {lang === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
