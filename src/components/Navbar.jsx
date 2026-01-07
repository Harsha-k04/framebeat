import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight"
        >
          Framebeat Labs
        </Link>

        <div className="flex gap-6 text-sm text-neutral-400">
          <Link to="/services" className="hover:text-white">
            Services
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/case-studies" className="hover:text-white">
            Case Studies
          </Link>
          <Link
            to="/contact"
            className="rounded-lg bg-white px-4 py-2 text-black hover:bg-neutral-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
