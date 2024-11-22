/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react'

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    '/images/5.png',
    '/images/4.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    '/images/9.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center bg-white overflow-hidden">
      {/* Background Images with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.05 : 1
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 5 }
            }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-4  flex justify-between items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl pl-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Source for Medical Supplies
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Your trusted source for medical supplies, equipment, and services.
          </p>
          <div className="flex gap-4">
            <Link href="/products">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Explore Products
            </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Us
            </motion.button>
            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, y: 0 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [-10, 10, -10],
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="hidden lg:block w-1/2"
        >
          <Image
            src="/images/doc2.png"
            alt="Medical Equipment Illustration"
            width={600}
            height={600}
            className="object-contain"
            priority
            onError={(e) => {
              e.currentTarget.parentElement?.classList.add('hidden');
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}