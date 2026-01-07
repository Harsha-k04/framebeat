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
        headers: {
          "Content-Type": "application/json",
        },
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
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Contact Us
      </h1>

      <p className="mt-6 text-neutral-400 max-w-2xl">
        Let’s discuss how Framebeat Labs & Media LLP can help grow your brand
        through media, AI, and strategic marketing.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-16 max-w-xl space-y-6"
      >
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
    </div>
  )
}
