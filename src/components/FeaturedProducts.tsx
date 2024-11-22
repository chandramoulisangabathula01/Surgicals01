'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Surgical Scissors',
    price: 1273,
    image: '/images/scissors.png'
  },
  {
    id: 2, 
    name: 'Digital Stethoscope',
    price: 8370,
    image: '/images/stethoscope.png'
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    price: 1395,
    image: '/images/pressureMonitor.png'
  },
  {
    id: 4,
    name: 'Surgical Mask Box',
    price: 299,
    image: '/images/maskbox.png'
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-100  text-gray-900 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Featured Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-600 font-bold">₹{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

