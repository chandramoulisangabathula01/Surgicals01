'use client'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Trusted Partner in Medical Supplies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            High-quality surgical instruments and medical equipment delivered with care.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Products
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 