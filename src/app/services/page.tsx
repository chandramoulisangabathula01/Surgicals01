'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { Truck, PackageSearch, ClipboardList, HeartPulse } from 'lucide-react'
import Image from 'next/image'
import { WhyChooseUs } from '@/components/WhyChooseUs'

export default function Services() {
  const services = [
    {
      icon: PackageSearch,
      title: "Supply Chain Management",
      description: "End-to-end management of medical supplies with real-time tracking and inventory optimization."
    },
    {
      icon: ClipboardList, 
      title: "Custom Orders",
      description: "Tailored medical supply solutions to meet your facility's specific requirements."
    },
    {
      icon: Truck,
      title: "Delivery Services",
      description: "Reliable and timely delivery with specialized handling for sensitive medical equipment."
    },
    {
      icon: HeartPulse,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring all supplies meet medical standards."
    }
  ]

  const serviceSpecificFeatures = [
    "ISO 13485 Certified Supply Chain",
    "24/7 Emergency Delivery",
    "Specialized Medical Storage"
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl font-bold mb-6">Explore Our Services</h1>
                <p className="text-xl text-gray-600 mb-8">Comprehensive solutions for your medical needs</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all">
                  Get Started
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px]"
              >
                <Image
                  src="/medical-professionals.svg"
                  alt="Medical Professionals"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs whyChooseUs={serviceSpecificFeatures} />
      </main>
      <Footer />
    </>
  )
}
