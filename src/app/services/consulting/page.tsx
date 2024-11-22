import { Navbar } from "@/components/Navbar";

export default function Consulting() {
  return (
    <section className=" bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Consulting Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Equipment Planning</h2>
          <p className="text-gray-600 mb-4">
            Expert guidance on medical equipment selection and facility planning.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Compliance Consulting</h2>
          <p className="text-gray-600 mb-4">
            Stay up-to-date with regulatory requirements and industry standards.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Training Programs</h2>
          <p className="text-gray-600 mb-4">
            Comprehensive training for your staff on equipment operation and maintenance.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            View Programs
          </button>
        </div>
        </div>
      </div>
    </section>
  );
} 