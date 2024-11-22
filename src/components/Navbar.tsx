"use client";
import Link from 'next/link';
// import Link from "next/link";
import {  FaChevronDown } from "react-icons/fa";
import { useState } from "react";
export function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productMenuItems = [
    { label: "Surgical Instruments", href: "/products/surgical" },
    { label: "Medical Equipment", href: "/products/equipment" },
    { label: "Disposable Supplies", href: "/products/disposable" },
  ];

  const servicesMenuItems = [
    { label: "Equipment Rental", href: "/services/rental" },
    { label: "Maintenance", href: "/services/maintenance" },
    { label: "Consulting", href: "/services/consulting" },
  ];
  return (
    <header className="bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-extrabold text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105">
              MetaSurgicals
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="relative group py-2">
                <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>

              <Link href="/about" className="relative group py-2">
                <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About Us</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>


              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => {
                  // Add a small delay before closing
                  setTimeout(() => {
                    setActiveDropdown(null);
                  }, 100);
                }}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2">
                  Products
                  <FaChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                {activeDropdown === 'products' && (
                  <div 
                    className="absolute left-0 mt-0 w-56 animate-dropdownEnter"
                    onMouseEnter={() => setActiveDropdown('products')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                      {productMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => {
                  // Add a small delay before closing
                  setTimeout(() => {
                    setActiveDropdown(null);
                  }, 100);
                }}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2">
                  Services
                  <FaChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                {activeDropdown === 'services' && (
                  <div 
                    className="absolute left-0 mt-0 w-56 animate-dropdownEnter"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                      {servicesMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              

              <Link href="/contact" className="relative group py-2">
                <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 