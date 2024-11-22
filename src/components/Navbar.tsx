import Link from 'next/link';

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Logo</div>
          
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
          </ul>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
} 