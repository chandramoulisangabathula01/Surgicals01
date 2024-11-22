import { Navbar } from "@/components/Navbar";

export default function EquipmentRental() {
  return (
    <section className=" bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Equipment Rental</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Short-term Rentals</h2>
          <p className="text-gray-600 mb-4">
            Flexible rental options for temporary medical equipment needs. Perfect for short-term care or facility backup.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            View Rental Options
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Long-term Leasing</h2>
          <p className="text-gray-600 mb-4">
            Cost-effective leasing solutions for extended equipment needs. Includes maintenance and support.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Learn About Leasing
          </button>
        </div>
      </div>
      </div>
    </section>
  );
} 