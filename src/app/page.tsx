import { Hero } from '@/components/Hero'
// import { FeaturedProducts } from '@/components/FeaturedProducts'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { ContactCTA } from '@/components/ContactCTA'
import { Newsletter } from '@/components/Newsletter'
// import { Newsletter } from '@/components/Newsletter'
// import { ContactCTA } from '@/components/ContactCTA'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        {/* <FeaturedProducts /> */}
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
