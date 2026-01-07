export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        
        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold">Framebeat Labs & Media LLP</h4>
          <p className="mt-4 text-gray-600 text-sm">
            Media • AI • Marketing
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold">Office Address</h4>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
             6th Floor, Sky Tower, D Space Suite No. 31, Mavoor Road Junction, Kozhikode, Kerala 673001
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="mt-4 text-gray-600 text-sm">
            Email: contact@framebeat.in
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} Framebeat Labs & Media LLP. All rights reserved.
      </div>
    </footer>
  )
}
