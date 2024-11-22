import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function About() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        {/* Add your about content here */}
      </div>
      <Footer />
    </main>
    </>
  )
} 