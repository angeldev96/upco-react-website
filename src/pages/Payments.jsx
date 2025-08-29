import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Payments() {
  const { lang } = useContext(LanguageContext)

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">{lang === 'es' ? 'Métodos de Pago Flexibles y Seguros' : 'Flexible and Secure Payment Methods'}</h1>

      <p className="mb-6">{lang === 'es'
        ? 'Métodos de Pago para la Compra de Energía en UPCO'
        : 'Payment methods for purchasing energy at UPCO'
      }</p>

      <section className="prose max-w-none">
        {lang === 'es' ? (
          <>
            <p>En UPCO, la compra de energía eléctrica es de manera prepago, y ofrecemos varias opciones para realizar tu pago de forma fácil y cómoda.</p>

            <h2>Pago por Transferencia Bancaria (Banpais y ACH)</h2>
            <p>Por favor, realiza tu transferencia bancaria al siguiente número de cuenta:</p>
            <p><strong>No. Cuenta Banpais: 216000314357</strong></p>
            <p>Una vez que hayas realizado el pago y tengas lista una imagen de tu comprobante, envíanosla para procesar tu compra.</p>
            <p>Cabe recalcar que puedes transferir desde cualquier cuenta bancaria, no es necesario que sea de Banpais. También puedes usar ACH desde bancos como Atlántida, BAC, Ficohsa, entre otros.</p>

            <h2>Pago por PayPal</h2>
            <p>Si prefieres pagar con PayPal, sigue estos pasos:</p>
            <ol>
              <li>Ingresa a www.paypal.com y accede a tu cuenta.</li>
              <li>Haz clic en la pestaña de «Dinero».</li>
              <li>Selecciona «Enviar dinero».</li>
              <li>Elige «Enviar dinero a amigos y familia» para evitar comisiones.</li>
              <li>Introduce nuestro correo electrónico: trrnld@gmail.com.</li>
              <li>Ingresa el monto que necesitas pagar y haz clic en «Continuar».</li>
              <li>Haz clic en «Enviar dinero ahora».</li>
              <li>Envía la página de confirmación a help@utilapowercompany.com.</li>
            </ol>

            <h2>Pago Presencial</h2>
            <p>Si prefieres realizar tu pago en persona, puedes visitarnos en nuestras oficinas de atención al cliente:</p>
            <h3>Oficina Principal (Barrio Hollands, Utila)</h3>
            <p>Ubicada en el centro de Útila, calle principal de la isla, contiguo a Banco Atlántida.</p>
            <p>🕒 Horario: Abierta los 365 días del año de 7:00 am a 7:00 pm, excepto el 25 de diciembre y el 1 de enero, cuando el horario es de 8:00 am a 5:00 pm.</p>
            <p>📍 Ver ubicación en Google Maps</p>

            <h3>Oficina en Los Cayitos</h3>
            <p>🕒 Horario: De lunes a sábado, de 8:30 am a 10:30 am y de 4:00 pm a 6:00 pm.</p>
            <p>🌊 Acceso: Solo en lancha.</p>

            <h3>🔔 Importante:</h3>
            <p>El pago presencial solo se acepta en efectivo.</p>
            <p>Se puede pagar en lempiras o en dólares en buen estado (billetes limpios, sin rasgaduras ni marcas).</p>
            <p>La tasa de cambio de dólar a lempira es de L 24.50.</p>
            <p>Por favor, trae tu número de medidor y el monto a pagar al momento de tu visita. Una vez realizado el pago, se te entregará un recibo que contiene el código de energía comprada.</p>

            <h2>Envío de Comprobante de Pago</h2>
            <p>Una vez realizada la transferencia, ya sea por Banpais o PayPal, envía tu comprobante de pago a través de:</p>
            <ul>
              <li>WhatsApp: <a href="https://wa.me/50488281644">https://wa.me/50488281644</a></li>
              <li>Facebook Messenger de UPCO: <a href="https://www.facebook.com/UtilaPowerCompany/">https://www.facebook.com/UtilaPowerCompany/</a></li>
            </ul>

            <p>Así podremos procesar tu pago y enviarte tu código de energía de inmediato.</p>
            <p>¡Gracias por confiar en UPCO!</p>
          </>
        ) : (
          <>
            <p>At UPCO, energy purchases are prepaid, and we offer several options to make your payment easy and convenient.</p>
            <h2>Bank Transfer (Banpais and ACH)</h2>
            <p>Please transfer to the following account number:</p>
            <p><strong>Banpais Account No: 216000314357</strong></p>
            <p>After payment, send an image of your receipt so we can process your purchase.</p>

            <h2>PayPal</h2>
            <p>If you prefer PayPal, follow these steps:</p>
            <ol>
              <li>Go to www.paypal.com and log in.</li>
              <li>Click the "Money" tab.</li>
              <li>Select "Send money".</li>
              <li>Choose "Send money to friends and family" to avoid fees.</li>
              <li>Enter our email: trrnld@gmail.com.</li>
              <li>Enter the amount and click Continue.</li>
              <li>Click Send money now.</li>
              <li>Send the confirmation page to help@utilapowercompany.com.</li>
            </ol>

            <h2>In-person Payment</h2>
            <p>If you prefer to pay in person, visit our customer service offices:</p>
            <h3>Main Office (Barrio Hollands, Utila)</h3>
            <p>Located in the center of Útila, main street, next to Banco Atlántida.</p>
            <p>🕒 Hours: Open 365 days a year from 7:00 am to 7:00 pm, except Dec 25 and Jan 1 (8:00 am to 5:00 pm).</p>
            <p>📍 View on Google Maps</p>

            <h3>Los Cayitos Office</h3>
            <p>🕒 Hours: Mon-Sat 8:30 am - 10:30 am and 4:00 pm - 6:00 pm.</p>
            <p>🌊 Access: By boat only.</p>

            <h3>🔔 Important:</h3>
            <p>In-person payments accepted in cash only.</p>
            <p>We accept lempiras or US dollars in good condition (clean bills, no tears or marks).</p>
            <p>Exchange rate: L 24.50 per USD.</p>

            <h2>Send Payment Receipt</h2>
            <p>After transferring via Banpais or PayPal, send your receipt via:</p>
            <ul>
              <li>WhatsApp: <a href="https://wa.me/50488281644">https://wa.me/50488281644</a></li>
              <li>Facebook Messenger: <a href="https://www.facebook.com/UtilaPowerCompany/">https://www.facebook.com/UtilaPowerCompany/</a></li>
            </ul>

            <p>We will process your payment and send your energy code immediately. Thank you for trusting UPCO!</p>
          </>
        )}
      </section>
    </main>
  )
}
