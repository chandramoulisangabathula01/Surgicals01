import { Navbar } from "@/components/Navbar";

export default function Maintenance() {
  return (
    <section className=" bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Maintenance Services</h1>
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Preventive Maintenance</h2>
          <p className="text-gray-600 mb-4">
            Regular maintenance schedules to keep your equipment running at optimal performance.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Equipment inspection</li>
            <li>Performance testing</li>
            <li>Calibration services</li>
            <li>Parts replacement</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Schedule Service
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Repair Services</h2>
          <p className="text-gray-600 mb-4">
            Quick and reliable repair services for all types of medical equipment.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Request Repair
          </button>
        </div>
      </div>
      </div>
    </section>
  );
} 