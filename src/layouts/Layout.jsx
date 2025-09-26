import Header from '../components/Header'
import Footer from '../components/Footer'
import IssueToast from '../components/IssueToast'
import { useEffect } from 'react'

export default function Layout({ children }) {
  useEffect(() => {
    // On first load, nudge the page down slightly to trigger reveal animations
    if (typeof window === 'undefined') return
    const key = 'upco_first_nudge'
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')
    setTimeout(() => {
      window.scrollTo({ top: 40, behavior: 'smooth' })
    }, 350)
  }, [])

  return (
    <>
      <Header />
  <IssueToast />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto px-6 py-0">{children}</main>
        <Footer />
      </div>
    </>
  )
}
