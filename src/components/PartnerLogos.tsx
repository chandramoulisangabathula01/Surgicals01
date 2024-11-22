'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Hospital A', logo: '/images/apollo.png' },
  { name: 'Clinic B', logo: '/images/max.png' },
  { name: 'Medical Center C', logo: '/images/manipal.png' },
  { name: 'Medical Center D', logo: '/images/artemis.png' },

  // Add more partners as needed
]

export function PartnerLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Leading Healthcare Institutions
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={300}
                height={300}
                className="max-w-[150px] h-auto grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 