'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Truck, DollarSign } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Quality',
    description: 'All our products meet the highest medical standards and certifications.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive prices without compromising on quality.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and secure shipping to your medical facility.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="text-blue-600 h-8 w-8 mr-4" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 