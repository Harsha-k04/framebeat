export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">
        Contact Us
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl">
        Let’s discuss how Framebeat Labs & Media LLP can help grow your brand
        through media, AI, and strategic marketing.
      </p>

      <form className="mt-16 max-w-xl space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          rows="5"
          placeholder="Tell us about your project"
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
