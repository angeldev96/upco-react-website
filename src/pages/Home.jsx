import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import ProjectsGallery from '../components/ProjectsGallery'
import NewsSection from '../components/NewsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />

  <ServicesGrid />
  <ProjectsGallery />
  <NewsSection />
  <ContactSection />
    </div>
  )
}
