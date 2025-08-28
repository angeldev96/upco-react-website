import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Footer() {
  const { lang } = useContext(LanguageContext)

  return (
    <footer className="bg-[#0b0b0b] text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/upco.png" alt="UPCO" className="w-20 mb-4" />
          <p className="text-gray-400">{lang === 'es' ? 'UPCO está comprometido a proporcionarte soluciones energéticas. Únete a nuestro viaje hacia un mundo más sostenible.' : 'UPCO is committed to providing you with energy solutions. Join our journey towards a more sustainable world.'}</p>
          <div className="flex items-center gap-3 mt-4 text-gray-400">
            <a href="#" aria-label="twitter" className="hover:text-white">X</a>
            <a href="https://www.facebook.com/UtilaPowerCompany" target="_blank" rel="noreferrer" className="hover:text-white">f</a>
            <a href="https://www.instagram.com/upco_hn/" target="_blank" rel="noreferrer" className="hover:text-white">ig</a>
            <a href="#" className="hover:text-white">in</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{lang === 'es' ? 'CONTACTO' : 'CONTACT US'}</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li>Hollands Road, 34101 Utila Islas de la Bahía, Honduras</li>
            <li>{lang === 'es' ? 'Contactar por WhatsApp: +504 8828-1644' : 'Contact via WhatsApp: +504 8828-1644'}</li>
            <li>help@utilapowercompany.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{lang === 'es' ? 'SERVICIOS' : 'SERVICES'}</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li>{lang === 'es' ? 'Métodos de Pago' : 'Payment Methods'}</li>
            <li>{lang === 'es' ? 'Equipo Comercial' : 'Commercial Equipment'}</li>
            <li>{lang === 'es' ? 'Equipo para el Hogar' : 'Home Equipment'}</li>
          </ul>
          <div className="mt-3 text-sm text-gray-400">🇺🇸 English<br/>🇪🇸 Español</div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">GALLERY</h4>
          <div className="w-40 h-24 bg-gray-800">
            <img src="/gallery1.jpg" alt="thumb" onError={(e)=>{ e.currentTarget.src='https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=600&auto=format&fit=crop' }} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#0b5fa8]">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400 text-sm">© UPCO 2024 - {new Date().getFullYear()}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</div>
      </div>
    </footer>
  )
}
