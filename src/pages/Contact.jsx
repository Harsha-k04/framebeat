import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to send message")
      }

      setSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Contact Us
      </h1>

      <p className="mt-6 text-neutral-400 max-w-2xl">
        Let’s discuss how Framebeat Labs & Media LLP can help grow your brand
        through media, AI, and strategic marketing.
      </p>

      {/* Layout */}
      <div className="mt-20 grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-white px-6 py-3 text-black transition hover:bg-neutral-200 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-sm text-green-400">
              Thanks! Your message has been sent successfully.
            </p>
          )}

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}
        </form>

        {/* Office Info + Map */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Our Office
          </h2>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            Framebeat Labs & Media LLP<br />
             6th Floor, Sky Tower, D Space Suite No. 31, Mavoor Road Junction, Kozhikode, Kerala 673001
          </p>

          <p className="mt-2 text-neutral-500 text-sm">
            We work with brands across India and globally.
          </p>

          {/* Google Map */}
          <div className="mt-8 h-[400px] w-full overflow-hidden rounded-2xl border border-neutral-800">
            <iframe
              title="Framebeat Labs & Media LLP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31304.26768848014!2d75.74246197431637!3d11.258948800000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65990781f2b77%3A0xe34d0c755a71c52f!2sFramebeat%20Labs%20%26%20Media%20LLP!5e0!3m2!1sen!2sin!4v1767805368620!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
