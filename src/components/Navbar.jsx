import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Framebeat Labs
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/services" className="hover:text-gray-500">Services</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/case-studies" className="hover:text-gray-500">Case Studies</Link>
          <Link to="/contact" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
