'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      
      role: 'CEO',
      image: '/images/about/ceo.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: '/images/about/Head of Operations.jpg'  
    },
    {
      name: 'Emily Rodriguez',
      role: 'Quality Control Manager',
      image: '/images/about/Quality Control Manager.jpg'
    }
  ]

  const timeline = [
    { year: '2010', event: 'Company Founded' },
    { year: '2015', event: 'Expanded to National Distribution' },
    { year: '2018', event: 'ISO 13485 Certification' },
    { year: '2023', event: 'Launched Innovation Lab' }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-900">
        {/* Intro Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white ">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Who We Are</h1>
              <p className="text-xl text-gray-600">Delivering quality medical supplies with trust and care</p>
            </motion.div>

            <div className="flex justify-center">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center"
                >
                  <div className="text-center px-8">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-2 mx-auto">
                      {item.year}
                    </div>
                    <p className="text-sm">{item.event}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-24 h-0.5 bg-blue-300 mt-6" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 mb-6">
                  <Image src="/images/about/mission2.png" alt="Mission" width={64} height={64} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600">To provide healthcare professionals with reliable, high-quality medical supplies that enable them to deliver the best possible care to their patients.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 mb-6">
                  <Image src="/images/about/vision3.png" alt="Vision" width={64} height={64} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">To become the most trusted partner in healthcare supply solutions, setting new standards for quality and innovation in medical equipment distribution.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={ref} className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Integrity', 'Quality', 'Customer Commitment'].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6">
                    <Image src={`/images/about/${value.toLowerCase()}.png`} alt={value} width={64} height={64} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value}</h3>
                  <p className="text-gray-600">
                    {value === 'Integrity' && 'Building trust through transparent and ethical practices'}
                    {value === 'Quality' && 'Delivering excellence in every product and service'}
                    {value === 'Customer Commitment' && 'Putting our customers first in everything we do'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}