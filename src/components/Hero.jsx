import React from 'react'

export default function Hero() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden">
        {/* Background image (cover) + subtle blur/dim */}
        {/* Use a local hero image placed at /public/hero.jpg. If missing, the inline Unsplash URL will be used as fallback via CSS background-image on the container. */}
        <img
          src="/hero.jpg"
          alt="Utila landscape"
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a9f7b6b7b7b7b7b7b7b7b7b7b7b7b7b' }}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-white uppercase font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
              ILUMINANDO EL PRESENTE Y
              <br />
              FUTURO DE LA ISLA
            </h1>

            <div className="mt-8">
              <a
                href="#services"
                className="inline-block bg-[#4fd23f] text-black font-semibold px-6 py-3 rounded shadow hover:bg-[#45c235] transition-colors duration-200"
              >
                Descubra mas
              </a>
            </div>
          </div>
        </div>

        {/* Decorative corner lines */}
        <div className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-white/90" />
        <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-white/90" />
        <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-white/90" />
        <div className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-white/90" />
      </div>
    </section>
  )
}
