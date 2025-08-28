export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg p-10 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-4">Utila Power Company</h1>
          <p className="mb-6">Reliable renewable energy solutions for Utila and the Bay Islands. We design, install and maintain clean power systems for homes and businesses.</p>
          <div className="space-x-3">
            <a className="inline-block bg-white text-blue-700 px-4 py-2 rounded font-semibold" href="#services">Our Services</a>
            <a className="inline-block border border-white px-4 py-2 rounded" href="#contact">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="services" className="grid md:grid-cols-3 gap-6">
        <article className="p-6 border rounded">
          <h3 className="font-bold mb-2">Solar Installations</h3>
          <p>Residential and commercial PV systems sized for your needs.</p>
        </article>
        <article className="p-6 border rounded">
          <h3 className="font-bold mb-2">Battery Storage</h3>
          <p>Storage solutions to keep your lights on when you need them most.</p>
        </article>
        <article className="p-6 border rounded">
          <h3 className="font-bold mb-2">Maintenance & Support</h3>
          <p>Local technicians and remote monitoring to ensure uptime.</p>
        </article>
      </section>
    </div>
  )
}
