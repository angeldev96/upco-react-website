import React, { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext({ lang: 'es', toggleLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('upco_lang') || 'es'
    } catch {
      return 'es'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('upco_lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  function toggleLang() {
    setLang((l) => (l === 'es' ? 'en' : 'es'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
