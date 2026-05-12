import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

const services = [
  {
    name: "AI Video Production",
    link: "/services/ai-video-production",
  },
  {
    name: "Brand Video Production",
    link: "/services/brand-video-production",
  },
  {
    name: "Influencer Marketing",
    link: "/services/influencer-marketing",
  },
  {
    name: "Social Media Management",
    link: "/services/social-media-management",
  },
  {
    name: "YouTube Management",
    link: "/services/youtube-management",
  },
  {
    name: "Podcast Production",
    link: "/services/podcast-production",
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-800 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Framebeat Labs"
              className="h-10 w-auto transition duration-300 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/"
              className="text-neutral-400 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-neutral-400 hover:text-white transition"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition">
                Services

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 w-80 rounded-2xl border border-neutral-800 bg-neutral-950/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-3">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.link}
                          className="block rounded-xl px-4 py-3 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/case-studies"
              className="text-neutral-400 hover:text-white transition"
            >
              Case Studies
            </Link>

            <Link
              to="/blogs"
              className="text-neutral-400 hover:text-white transition"
            >
              Blog
            </Link>

            <Link
              to="/careers"
              className="text-neutral-400 hover:text-white transition"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="text-neutral-400 hover:text-white transition"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-neutral-200 transition shadow-lg"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-300"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-neutral-800 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-6 py-8 space-y-6">
              <Link
                to="/"
                className="block text-neutral-300 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-neutral-300 hover:text-white transition"
              >
                About
              </Link>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  Services
                </p>

                <div className="space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.link}
                      className="block text-neutral-300 hover:text-white transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/case-studies"
                className="block text-neutral-300 hover:text-white transition"
              >
                Case Studies
              </Link>

              <Link
                to="/blog"
                className="block text-neutral-300 hover:text-white transition"
              >
                Blog
              </Link>

              <Link
                to="/careers"
                className="block text-neutral-300 hover:text-white transition"
              >
                Careers
              </Link>

              <Link
                to="/contact"
                className="block text-neutral-300 hover:text-white transition"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center w-full rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
