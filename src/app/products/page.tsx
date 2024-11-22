import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Surgical Instruments",
      description: "High-quality surgical tools and instruments for medical professionals",
      image: "/images/surgical-instruments.jpg",
      href: "/products/surgical",
      features: ["Precision-engineered", "Sterilizable", "Durable materials"]
    },
    {
      title: "Medical Equipment", 
      description: "Advanced medical equipment and monitoring devices",
      image: "/images/medical-equipment.jpg",
      href: "/products/equipment",
      features: ["Latest technology", "Reliable performance", "User-friendly"]
    },
    {
      title: "Disposable Supplies",
      description: "Essential disposable medical supplies and consumables",
      image: "/images/disposable-supplies.jpg", 
      href: "/products/disposable",
      features: ["Sterile packaging", "High-quality materials", "Bulk options"]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h1>
            <p className="text-xl text-gray-600">Explore our comprehensive range of medical supplies and equipment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Link 
                key={category.title}
                href={category.href}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <div className="h-48 bg-gray-200">
                    {/* Add actual images later */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      [Image Placeholder]
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Need Help Choosing?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team of experts is here to help you find the perfect products for your needs.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
