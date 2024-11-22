import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}


