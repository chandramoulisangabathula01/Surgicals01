/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Chief Surgeon',
    quote: 'The quality of surgical instruments has been consistently excellent. Their customer service is outstanding.',
    image: '/images/doctest1.jpg'
  },
  {
    id: 2,
    name: 'Dr. Michael Smith',
    role: 'Head of Surgery',
    quote: 'The instruments are durable and sterilize well. I highly recommend them.',
    image: '/images/doctest2.jpg'
  },
  {
    id: 3,
    name: 'Dr. Emily Chen',
    role: 'Pediatrician',
    quote: 'The pediatric instruments are perfect for our young patients. They are easy to sterilize and use.',
    image: '/images/doctest3.jpg'
  }
  // ... more testimonials
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                {/* Add actual image here */}
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} width={200} height={200} />
                <div className="w-full h-full bg-gray-200" />
              </div>
              <p className="text-xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
              <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 