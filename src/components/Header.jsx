import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import Flag from 'react-world-flags'
import { IconMenu2, IconX } from '@tabler/icons-react'

const MENU = [
  { to: '/', es: 'INICIO', en: 'HOME' },
  { to: '/payment', es: 'MÉTODOS DE PAGO', en: 'PAYMENT METHODS' },
  { to: '/customer-service', es: 'ATENCIÓN AL CLIENTE', en: 'CUSTOMER SERVICE' },
  { to: '/news', es: 'NOTICIAS', en: 'NEWS' },
  { to: '/tariff', es: 'TARIFA', en: 'TARIFF' },
  { to: '/about', es: 'NOSOTROS', en: 'ABOUT US' },
  { to: '/faqs', es: 'FAQS', en: 'FAQS' },
  { to: '/contact', es: 'CONTACTO', en: 'CONTACT' },
  { to: '/suggestions', es: 'SUGERENCIAS Y QUEJAS', en: 'SUGGESTIONS AND COMPLAINTS' },
]

export default function Header() {
  const { lang, toggleLang } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)

  return (
    <header className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Top info bar */}
      <div className="bg-black text-white text-sm w-full">
        <div className="w-full px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {lang === 'es' ? 'Horario de Apertura: Lun - Dom de 7.00 a 19.00' : 'Opening Hours: Mon - Sun 7:00 AM to 7:00 PM'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>{lang === 'es' ? 'Síguenos:' : 'Follow Us:'}</span>
            <div className="flex gap-2">
              <a className="hover:text-green-400 transition-colors" href="https://www.facebook.com/UtilaPowerCompany" aria-label="facebook" target="_blank" rel="noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a className="hover:text-green-400 transition-colors" href="https://www.instagram.com/upco_hn/" aria-label="instagram" target="_blank" rel="noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo / header row */}
      <div className="bg-black text-white w-full">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/upco.png" alt="UPCO Logo" className="w-16 h-16" />
            <div>
              <div className="text-3xl font-bold tracking-wide">UPCO</div>
              <div className="text-sm text-gray-300 tracking-widest">UTILA POWER COMPANY</div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* right side placeholder */}
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="w-full relative z-40" style={{ backgroundColor: '#01c100' }}>
        <div className="w-full">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* Desktop menu with hover/focus dropdowns (centered) */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <ul className="flex items-center gap-8 text-sm font-medium text-black">
                <li className="relative group">
                  <button className="uppercase tracking-wide py-2 px-4 rounded-sm transition-transform">{lang === 'es' ? 'Inicio' : 'Home'}</button>
                  <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out min-w-[220px] z-50">
                    <ul className="py-2">
                      <li><Link to="/" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Nosotros' : 'About Us'}</Link></li>
                      <li><Link to="/gallery" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Imágenes' : 'Images'}</Link></li>
                    </ul>
                  </div>
                </li>

                <li className="relative group">
                  <button className="uppercase tracking-wide py-2 px-4 rounded-sm transition-transform">{lang === 'es' ? 'Atención al Cliente' : 'Customer Service'}</button>
                  <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out min-w-[260px] z-50">
                    <ul className="py-2">
                      <li><Link to="/tarifas" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Tarifas vigentes' : 'Current Rates'}</Link></li>
                      <li><Link to="/payments" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Métodos de Pago' : 'Payment Methods'}</Link></li>
                      <li><Link to="/procesos" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Procesos (Nuevos Servicios, descuentos tercera edad)' : 'Processes (New Services, senior discounts)'}</Link></li>
                      <li><Link to="/anonima" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Sección anónima' : 'Anonymous Section'}</Link></li>
                      <li><Link to="/reclamos" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Reclamos' : 'Complaints'}</Link></li>
                      <li><Link to="/calculo-consumo" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Calculo de consumo' : 'Consumption Calculator'}</Link></li>
                      <li><Link to="/oficinas" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Oficinas' : 'Offices'}</Link></li>
                      <li><Link to="/preguntas" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Preguntas frecuentes' : 'FAQ'}</Link></li>
                    </ul>
                  </div>
                </li>

                <li className="relative group">
                  <button className="uppercase tracking-wide py-2 px-4 rounded-sm transition-transform">{lang === 'es' ? 'Noticias' : 'News'}</button>
                  <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out min-w-[220px] z-50">
                    <ul className="py-2">
                      <li><Link to="/mantenimientos" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Mantenimientos' : 'Maintenance'}</Link></li>
                      <li><Link to="/eventos" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Eventos y comunicados' : 'Events & Notices'}</Link></li>
                      <li><Link to="/campanas" className="block px-4 py-2 text-sm">{lang === 'es' ? 'Contenido de campaña' : 'Campaign Content'}</Link></li>
                    </ul>
                  </div>
                </li>

                <li className="relative group">
                  <button className="uppercase tracking-wide py-2 px-4 rounded-sm transition-transform">{lang === 'es' ? 'Contactos' : 'Contacts'}</button>
                  <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out min-w-[220px] z-50">
                    <ul className="py-2">
                      <li><a href="https://wa.me/50488281644" className="block px-4 py-2 text-sm">WhatsApp</a></li>
                      <li><a href="https://facebook.com/UtilaPowerCompany" className="block px-4 py-2 text-sm">Facebook</a></li>
                      <li><a href="https://instagram.com/upco_hn" className="block px-4 py-2 text-sm">Instagram</a></li>
                      <li><a href="https://t.me/" className="block px-4 py-2 text-sm">Telegram</a></li>
                      <li><a href="mailto:info@upco.hn" className="block px-4 py-2 text-sm">Correo</a></li>
                      <li><a href="tel:+50488281644" className="block px-4 py-2 text-sm">Llamadas / Números fijos</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right-side controls */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                {/* Two-flag toggle: shows both flags and highlights the active one */}
                <div className="flex items-center bg-white/10 p-1 rounded-full">
                  <button
                    onClick={() => lang !== 'es' && toggleLang()}
                    aria-pressed={lang === 'es'}
                    aria-label="Seleccionar Español"
                    className={`w-8 h-6 rounded-full overflow-hidden transition-transform duration-150 ${lang === 'es' ? 'ring-2 ring-white scale-105' : 'opacity-70'}`}>
                    <Flag code="hn" height={20} className="w-full h-full object-cover" alt="Honduras" />
                  </button>

                  <button
                    onClick={() => lang !== 'en' && toggleLang()}
                    aria-pressed={lang === 'en'}
                    aria-label="Select English"
                    className={`w-8 h-6 rounded-full overflow-hidden ml-1 transition-transform duration-150 ${lang === 'en' ? 'ring-2 ring-white scale-105' : 'opacity-70'}`}>
                    <Flag code="us" height={20} className="w-full h-full object-cover" alt="United States" />
                  </button>
                </div>
              </div>

              <button className="hidden md:inline-flex p-2 rounded-sm hover:text-white hover:bg-black hover:bg-opacity-20 transition-all" aria-label="search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile hamburger */}
              <button className="md:hidden p-2 rounded-md bg-white/10" aria-label="menu" aria-expanded={open} onClick={() => setOpen((s) => !s)}>
                {open ? <IconX size={20} stroke={1.8} /> : <IconMenu2 size={20} stroke={1.8} />}
              </button>
            </div>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="md:hidden bg-[#01c100]">
              <ul className="flex flex-col px-4 py-3 gap-1">
                <li>
                  <div className="font-semibold uppercase py-2">{lang === 'es' ? 'Inicio' : 'Home'}</div>
                  <ul className="pl-3">
                    <li><Link to="/nosotros" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Nosotros' : 'About Us'}</Link></li>
                    <li><Link to="/imagenes" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Imágenes' : 'Images'}</Link></li>
                  </ul>
                </li>

                <li>
                  <div className="font-semibold uppercase py-2">{lang === 'es' ? 'Atención al Cliente' : 'Customer Service'}</div>
                  <ul className="pl-3">
                    <li><Link to="/tarifas" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Tarifas vigentes' : 'Current Rates'}</Link></li>
                    <li><Link to="/procesos" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Procesos' : 'Processes'}</Link></li>
                    <li><Link to="/anonima" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Sección anónima' : 'Anonymous Section'}</Link></li>
                    <li><Link to="/reclamos" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Reclamos' : 'Complaints'}</Link></li>
                    <li><Link to="/calculo-consumo" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Calculo de consumo' : 'Consumption Calculator'}</Link></li>
                    <li><Link to="/oficinas" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Oficinas' : 'Offices'}</Link></li>
                    <li><Link to="/preguntas" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Preguntas frecuentes' : 'FAQ'}</Link></li>
                  </ul>
                </li>

                <li>
                  <div className="font-semibold uppercase py-2">{lang === 'es' ? 'Noticias' : 'News'}</div>
                  <ul className="pl-3">
                    <li><Link to="/mantenimientos" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Mantenimientos' : 'Maintenance'}</Link></li>
                    <li><Link to="/eventos" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Eventos y comunicados' : 'Events & Notices'}</Link></li>
                    <li><Link to="/campanas" onClick={() => setOpen(false)} className="block py-2">{lang === 'es' ? 'Contenido de campaña' : 'Campaign Content'}</Link></li>
                  </ul>
                </li>

                <li>
                  <div className="font-semibold uppercase py-2">{lang === 'es' ? 'Contactos' : 'Contacts'}</div>
                  <ul className="pl-3">
                    <li><a href="https://wa.me/50488281644" className="block py-2">WhatsApp</a></li>
                    <li><a href="https://facebook.com/UtilaPowerCompany" className="block py-2">Facebook</a></li>
                    <li><a href="https://instagram.com/upco_hn" className="block py-2">Instagram</a></li>
                    <li><a href="https://t.me/" className="block py-2">Telegram</a></li>
                    <li><a href="mailto:info@upco.hn" className="block py-2">Correo</a></li>
                    <li><a href="tel:+50488281644" className="block py-2">Llamadas / Números fijos</a></li>
                  </ul>
                </li>

                <li>
                  <div className="flex items-center justify-center gap-3 py-3">
                      <div className="flex items-center bg-white/10 p-1 rounded-full">
                        <button
                          onClick={() => { if (lang !== 'es') toggleLang(); setOpen(false); }}
                          aria-pressed={lang === 'es'}
                          aria-label="Seleccionar Español"
                          className={`w-8 h-6 rounded-full overflow-hidden transition-transform duration-150 ${lang === 'es' ? 'ring-2 ring-white scale-105' : 'opacity-70'}`}>
                          <Flag code="hn" height={20} className="w-full h-full object-cover" alt="Honduras" />
                        </button>

                        <button
                          onClick={() => { if (lang !== 'en') toggleLang(); setOpen(false); }}
                          aria-pressed={lang === 'en'}
                          aria-label="Select English"
                          className={`w-8 h-6 rounded-full overflow-hidden ml-1 transition-transform duration-150 ${lang === 'en' ? 'ring-2 ring-white scale-105' : 'opacity-70'}`}>
                          <Flag code="us" height={20} className="w-full h-full object-cover" alt="United States" />
                        </button>
                      </div>
                    </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
