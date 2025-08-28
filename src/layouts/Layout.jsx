import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto px-6 py-0">{children}</main>
        <Footer />
      </div>
    </>
  )
}
