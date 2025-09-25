import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import useReveal from '../hooks/useReveal'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

export default function Footer() {
  const { lang } = useContext(LanguageContext)
  const ref = useReveal()

  return (
    <footer className="bg-[#0b0b0b] text-gray-300">
      <div ref={ref} className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 reveal">
        <div>
          <Link to="/" aria-label="Home" className="inline-block mb-4">
            <img src="/upco.png" alt="UPCO" className="w-20" />
          </Link>
          <p className="text-gray-400">{lang === 'es' ? 'UPCO está comprometido a proporcionarte soluciones energéticas. Únete a nuestro viaje hacia un mundo más sostenible.' : 'UPCO is committed to providing you with energy solutions. Join our journey towards a more sustainable world.'}</p>
          <div className="flex items-center gap-3 mt-4 text-gray-400">
            <a href="https://www.facebook.com/UtilaPowerCompany" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="hover:text-white">
              <IconBrandFacebook size={18} stroke={1.5} />
            </a>
            <a href="https://www.instagram.com/upco_hn/" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="hover:text-white">
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{lang === 'es' ? 'CONTACTO' : 'CONTACT US'}</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li>
              <a href="https://maps.app.goo.gl/v25ibJjfDM34hd1cA" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Hollands Road, 34101 Utila Islas de la Bahía, Honduras
              </a>
            </li>
            <li>
              <a href="https://wa.me/50488281644" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {lang === 'es' ? 'WhatsApp: +504 8828-1644' : 'WhatsApp: +504 8828-1644'}
              </a>
            </li>
            <li>
              <a href="tel:+50488281644" className="hover:text-white">{lang === 'es' ? 'Teléfono: +504 8828-1644' : 'Phone: +504 8828-1644'}</a>
            </li>
            <li>
              <a href="mailto:help@utilapowercompany.com" className="hover:text-white">help@utilapowercompany.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{lang === 'es' ? 'SERVICIOS' : 'SERVICES'}</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li>
              <Link to="/payments" className="hover:text-white">{lang === 'es' ? 'Métodos de Pago' : 'Payment Methods'}</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">{lang === 'es' ? 'Servicios' : 'Services'}</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">{lang === 'es' ? 'Contacto' : 'Contact'}</Link>
            </li>
          </ul>
          <div className="mt-3 text-sm text-gray-400">🇺🇸 English<br/>🇪🇸 Español</div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">GALLERY</h4>
          <div className="w-40 h-24 bg-gray-800">
            <a href="/gallery" className="block w-full h-full">
              <img src="/gallery1.jpg" alt="thumb" onError={(e)=>{ e.currentTarget.src='https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=600&auto=format&fit=crop' }} className="w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0b5fa8]">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400 text-sm">© UPCO 2024 - {new Date().getFullYear()}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</div>
      </div>
    </footer>
  )
}
