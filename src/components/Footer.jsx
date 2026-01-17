import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        
        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold">
            Framebeat Labs & Media LLP
          </h4>

          <p className="mt-4 text-neutral-400 text-sm">
            Media • AI • Marketing
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4 text-neutral-400">
            <a
              href="https://www.instagram.com/framebeat.labs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://youtube.com/@digitalbeatenglish?si=rVQpc3srliXnImVL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition"
            >
              <FaYoutube size={20} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61586519062256"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/digital-beat-ai-media-llp/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold">
            Office Address
          </h4>

          <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
            Framebeat Labs & Media LLP<br />
            Suite No. 31<br />
            Door No. 63/700<br />
            D Space, 6th Floor<br />
            Sky Tower, Mavoor Road Junction<br />
            Bank Road, Kozhikode-673001
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold">
            Contact
          </h4>

          <p className="mt-4 text-neutral-400 text-sm">
            Email:{" "}
            <a
              href="mailto:contact@framebeatlabs.com"
              className="hover:text-white transition"
            >
              contact@framebeatlabs.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-neutral-500 pb-6">
        © {new Date().getFullYear()} Framebeat Labs & Media LLP. All rights reserved.
      </div>
    </footer>
  )
}
