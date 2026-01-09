import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Framebeat Labs & Media LLP"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          <Link to="/about" className="hover:text-white">
            About
          </Link>

          <Link to="/services" className="hover:text-white">
            Services
          </Link>

          <Link to="/case-studies" className="hover:text-white">
            Case Studies
          </Link>

          <Link to="/careers" className="hover:text-white">
            Careers
          </Link>

          <Link
            to="/contact"
            className="rounded-lg bg-white px-4 py-2 text-black hover:bg-neutral-200 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="flex flex-col px-6 py-6 space-y-4 text-neutral-300">
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link to="/case-studies" onClick={() => setOpen(false)}>
              Case Studies
            </Link>

            <Link to="/careers" onClick={() => setOpen(false)}>
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-lg bg-white px-4 py-2 text-black text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
