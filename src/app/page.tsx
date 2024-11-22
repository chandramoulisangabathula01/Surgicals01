import { Hero } from '@/components/Hero'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { ContactCTA } from '@/components/ContactCTA'
// import { Newsletter } from '@/components/Newsletter'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
import { Certifications } from '@/components/Certifications'
import { PartnerLogos } from '@/components/PartnerLogos'
// import { TestImage } from '@/components/TestImage'
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-900">
        <Hero />
        {/* <TestImage /> */}
        <Certifications />
        <FeaturedProducts />
        <PartnerLogos />
        <WhyChooseUs whyChooseUs={[
          "Industry-Leading Certifications",
          "Global Quality Standards",
          "Safety-First Approach"
        ]} />
        <Testimonials />
        <FAQ />
        {/* <Newsletter /> */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
