import { Navbar } from "@/components/Navbar";
import Image from "next/image";

const disposableProducts = [
  {
    id: 1,
    name: "Surgical Masks",
    description: "High-quality disposable surgical masks with three-layer protection.",
    image: "/images/placeholder.jpg",
    alt: "Disposable Supplies"
  },
  {
    id: 2,
    name: "Surgical Masks",
    description: "High-quality disposable surgical masks with three-layer protection.",
    image: "/images/placeholder.jpg",
    alt: "Disposable Supplies"
  },
  {
    id: 3,
    name: "Surgical Masks",
    description: "High-quality disposable surgical masks with three-layer protection.",
    image: "/images/placeholder.jpg",
    alt: "Disposable Supplies"
  },
  {
    id: 4,
    name: "Surgical Masks",
    description: "High-quality disposable surgical masks with three-layer protection.",
    image: "/images/placeholder.jpg",
    alt: "Disposable Supplies"
  },
  {
    id: 5,
    name: "Surgical Masks",
    description: "High-quality disposable surgical masks with three-layer protection.",
    image: "/images/placeholder.jpg",
    alt: "Disposable Supplies"
  }
];

const ProductCard = ({ product }: { product: typeof disposableProducts[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default function DisposableSupplies() {
  return (
    <section className="bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Disposable Supplies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disposableProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}